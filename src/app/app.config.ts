import { provideHttpClient } from '@angular/common/http';
import { ApplicationConfig, provideBrowserGlobalErrorListeners, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';

// Repositorios del dominio
import { UserRepository } from './core/domain/repositories/user.repository';
import { ProductRepository } from './core/domain/repositories/product.repository';
import { MovieRepository } from './core/domain/repositories/movie.repository';
import { CategoryRepository } from './core/domain/repositories/category.repository';

// Implementaciones locales (mock)
import { UserLocalRepositoryImpl } from './core/infrastructure/repositories/local-implementation/user-local.repository.impl';
import { ProductLocalRepositoryImpl } from './core/infrastructure/repositories/local-implementation/product-local.repository.impl';
import { MovieLocalRepositoryImpl } from './core/infrastructure/repositories/local-implementation/movie-local.repository.impl';
import { CategoryLocalRepositoryImpl } from './core/infrastructure/repositories/local-implementation/category-local.repository.impl';

// Implementaciones para Node.js
import { UserNodeRepositoryImpl } from './core/infrastructure/repositories/node-implementation/user-node.repository.impl';
import { ProductNodeRepositoryImpl } from './core/infrastructure/repositories/node-implementation/product-node.repository.impl';
import { MovieNodeRepositoryImpl } from './core/infrastructure/repositories/node-implementation/movie-node.repository.impl';
import { CategoryNodeRepositoryImpl } from './core/infrastructure/repositories/node-implementation/category-node.repository.impl';

// Implementaciones para Spring Boot
import { UserSpringBootRepositoryImpl } from './core/infrastructure/repositories/springboot-implementation/user-springboot.repository.impl';
import { ProductSpringBootRepositoryImpl } from './core/infrastructure/repositories/springboot-implementation/product-springboot.repository.impl';
import { MovieSpringBootRepositoryImpl } from './core/infrastructure/repositories/springboot-implementation/movie-springboot.repository.impl';
import { CategorySpringBootRepositoryImpl } from './core/infrastructure/repositories/springboot-implementation/category-springboot.repository.impl';

/**
 * Tipo de fuente de datos disponible en la aplicación.
 *
 * @remarks
 * Define las opciones de origen de datos que pueden ser utilizadas:
 * - `local`: Datos simulados (mock) para desarrollo o pruebas.
 * - `node`: Backend implementado con Node.js.
 * - `spring`: Backend implementado con Spring Boot.
 */
type DataSource = 'local' | 'node' | 'spring';

/**
 * Configuración actual de la fuente de datos.
 *
 * @remarks
 * Cambia este valor para alternar entre las diferentes
 * implementaciones de repositorios.
 *
 * Opciones disponibles:
 * - `'local'` - Usa datos mock locales
 * - `'node'` - Usa backend Node.js
 * - `'spring'` - Usa backend Spring Boot
 */
const DATA_SOURCE = 'local' as DataSource;


/**
 * Proveedores de repositorios según la fuente de datos seleccionada.
 *
 * @remarks
 * Esta función retorna un arreglo de proveedores que asocian
 * las interfaces abstractas de repositorio con sus implementaciones
 * concretas correspondientes.
 *
 * La selección se basa en el valor de la constante {@link DATA_SOURCE}.
 *
 * @returns Arreglo de objetos de configuración de proveedores para
 * los repositorios de User, Product, Movie y Category.
 *
 * @example
 * ```typescript
 * // Si DATA_SOURCE = 'local'
 * const providers = repositoryProviders();
 * // Retorna implementaciones locales (mock)
 * ```
 */
const repositoryProviders = () => {
  switch (DATA_SOURCE) {
    case 'node':
      return [
        { provide: UserRepository, useClass: UserNodeRepositoryImpl },
        { provide: ProductRepository, useClass: ProductNodeRepositoryImpl },
        { provide: MovieRepository, useClass: MovieNodeRepositoryImpl },
        { provide: CategoryRepository, useClass: CategoryNodeRepositoryImpl },
      ];

    case 'spring':
      return [
        { provide: UserRepository, useClass: UserSpringBootRepositoryImpl },
        { provide: ProductRepository, useClass: ProductSpringBootRepositoryImpl },
        { provide: MovieRepository, useClass: MovieSpringBootRepositoryImpl },
        { provide: CategoryRepository, useClass: CategorySpringBootRepositoryImpl },
      ];

    default:
      return [
        { provide: UserRepository, useClass: UserLocalRepositoryImpl },
        { provide: ProductRepository, useClass: ProductLocalRepositoryImpl },
        { provide: MovieRepository, useClass: MovieLocalRepositoryImpl },
        { provide: CategoryRepository, useClass: CategoryLocalRepositoryImpl },
      ];
  }
};

/**
 * Configuración principal de la aplicación Angular.
 *
 * @remarks
 * Este objeto define todos los proveedores globales necesarios
 * para el funcionamiento de la aplicación:
 *
 * - Repositorios según la fuente de datos seleccionada
 * - Manejo de errores globales del navegador
 * - Configuración de detección de cambios con coalescencia de eventos
 * - Enrutamiento con las rutas definidas
 * - Cliente HTTP para peticiones a APIs
 *
 * @example
 * ```typescript
 * // En main.ts
 * bootstrapApplication(App, appConfig);
 * ```
 */
export const appConfig: ApplicationConfig = {
  providers: [
    ...repositoryProviders(),

    provideBrowserGlobalErrorListeners(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideHttpClient(),
  ],
};