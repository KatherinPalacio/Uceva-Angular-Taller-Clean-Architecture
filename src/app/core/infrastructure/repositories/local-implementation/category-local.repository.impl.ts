import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Category } from '../../../domain/models/category.model';
import { CategoryRepository } from '../../../domain/repositories/category.repository';
import { CATEGORIES_MOCK } from '../../../../mocks/categories.mocks';

/**
 * Implementación concreta del repositorio de categorías que obtiene los datos
 * desde una fuente local (mock).
 *
 * @remarks
 * Este repositorio pertenece a la capa de infraestructura.
 * Su responsabilidad es proporcionar datos simulados de categorías
 * durante el desarrollo, pruebas unitarias, o como fallback
 * cuando los backends (Spring Boot o Node.js) no están disponibles.
 *
 * No realiza peticiones HTTP; los datos son estáticos y provienen
 * del mock {@link CATEGORIES_MOCK}.
 *
 * Implementa la interfaz {@link CategoryRepository} definida en el dominio.
 */
@Injectable({
  providedIn: 'root',
})
export class CategoryLocalRepositoryImpl implements CategoryRepository {
  /**
   * Obtiene un listado de categorías desde la fuente local (mock).
   *
   * @param count - Número de categorías a obtener.
   * @returns Observable que emite el arreglo de categorías.
   *
   * @remarks
   * Este método retorna los primeros `count` elementos del arreglo
   * {@link CATEGORIES_MOCK} utilizando `Array.slice()`.
   *
   * Como los datos son locales y síncronos, se encapsulan en un
   * Observable usando `of()` para mantener la consistencia con
   * las otras implementaciones que sí realizan peticiones asíncronas.
   *
   * @example
   * ```typescript
   * categoryLocalRepository.getAll(3).subscribe(categories => {
   *   console.log(categories); // Primeras 3 categorías del mock
   * });
   *
   * // Si count es mayor al tamaño del mock, retorna todas las categorías
   * categoryLocalRepository.getAll(100).subscribe(categories => {
   *   console.log(categories.length); // 5 (todas las del mock)
   * });
   * ```
   */
  getAll(count: number): Observable<Category[]> {
    return of(CATEGORIES_MOCK.slice(0, count));
  }
}