import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Movie } from '../../../domain/models/movie.model';
import { MovieRepository } from '../../../domain/repositories/movie.repository';
import { MOVIES_MOCK } from '../../../../mocks/movies.mocks';

/**
 * Implementación concreta del repositorio de películas que obtiene los datos
 * desde una fuente local (mock).
 *
 * @remarks
 * Este repositorio pertenece a la capa de infraestructura.
 * Su responsabilidad es proporcionar datos simulados de películas
 * durante el desarrollo, pruebas unitarias, o como fallback
 * cuando los backends (Spring Boot o Node.js) no están disponibles.
 *
 * No realiza peticiones HTTP; los datos son estáticos y provienen
 * del mock {@link MOVIES_MOCK}.
 *
 * Implementa la interfaz {@link MovieRepository} definida en el dominio.
 */
@Injectable({
  providedIn: 'root',
})
export class MovieLocalRepositoryImpl implements MovieRepository {
  /**
   * Obtiene un listado de películas desde la fuente local (mock).
   *
   * @param count - Número de películas a obtener.
   * @returns Observable que emite el arreglo de películas.
   *
   * @remarks
   * Este método retorna los primeros `count` elementos del arreglo
   * {@link MOVIES_MOCK} utilizando `Array.slice()`.
   *
   * Como los datos son locales y síncronos, se encapsulan en un
   * Observable usando `of()` para mantener la consistencia con
   * las otras implementaciones que sí realizan peticiones asíncronas.
   *
   * @example
   * ```typescript
   * movieLocalRepository.getAll(3).subscribe(movies => {
   *   console.log(movies); // Primeras 3 películas del mock
   * });
   *
   * // Si count es mayor al tamaño del mock, retorna todas las películas
   * movieLocalRepository.getAll(100).subscribe(movies => {
   *   console.log(movies.length); // 5 (todas las del mock)
   * });
   * ```
   */
  getAll(count: number): Observable<Movie[]> {
    return of(MOVIES_MOCK.slice(0, count));
  }
}