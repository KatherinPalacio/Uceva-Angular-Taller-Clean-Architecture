import { provideHttpClient } from '@angular/common/http';
import { ApplicationConfig, provideBrowserGlobalErrorListeners, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';



import { UserRepository } from './core/domain/repositories/user.repository';
import { ProductRepository } from './core/domain/repositories/product.repository';
import { MovieRepository } from './core/domain/repositories/movie.repository';
import { CategoryRepository } from './core/domain/repositories/category.repository';

import { UserLocalRepositoryImpl } from './core/infrastructure/repositories/local-implementation/user-local.repository.impl';
import { ProductLocalRepositoryImpl } from './core/infrastructure/repositories/local-implementation/product-local.repository.impl';
import { MovieLocalRepositoryImpl } from './core/infrastructure/repositories/local-implementation/movie-local.repository.impl';
import { CategoryLocalRepositoryImpl } from './core/infrastructure/repositories/local-implementation/category-local.repository.impl';

import { UserNodeRepositoryImpl } from './core/infrastructure/repositories/node-implementation/user-node.repository.impl';
import { ProductNodeRepositoryImpl } from './core/infrastructure/repositories/node-implementation/product-node.repository.impl';
import { MovieNodeRepositoryImpl } from './core/infrastructure/repositories/node-implementation/movie-node.repository.impl';
import { CategoryNodeRepositoryImpl } from './core/infrastructure/repositories/node-implementation/category-node.repository.impl';

import { UserSpringBootRepositoryImpl } from './core/infrastructure/repositories/springboot-implementation/user-springboot.repository.impl';
import { ProductSpringBootRepositoryImpl } from './core/infrastructure/repositories/springboot-implementation/product-springboot.repository.impl';
import { MovieSpringBootRepositoryImpl } from './core/infrastructure/repositories/springboot-implementation/movie-springboot.repository.impl';
import { CategorySpringBootRepositoryImpl } from './core/infrastructure/repositories/springboot-implementation/category-springboot.repository.impl';



type DataSource = 'local' | 'node' | 'spring';

const DATA_SOURCE = 'node' as DataSource;

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


export const appConfig: ApplicationConfig = {
  providers: [
    ...repositoryProviders(),

    provideBrowserGlobalErrorListeners(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideHttpClient(),
  ],
};