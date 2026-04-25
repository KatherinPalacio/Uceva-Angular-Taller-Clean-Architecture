import { Observable } from 'rxjs';

import { Movie } from '../models/movie.model';

/**
 * Repositorio abstracto para la gestión de películas.
 *
 * @remarks
 * Esta interfaz abstracta pertenece a la capa de dominio.
 * Define el contrato que deben implementar todas las
 * implementaciones concretas de repositorios de películas
 * (local, Node.js, Spring Boot, etc.).
 *
 * Al ser una clase abstracta en lugar de una interfaz,
 * permite una mayor flexibilidad y puede ser extendida
 * con métodos adicionales en el futuro.
 *
 * El patrón repositorio abstrae la fuente de datos,
 * permitiendo que la capa de dominio no dependa de
 * detalles de infraestructura.
 */
export abstract class MovieRepository {
  /**
   * Obtiene un listado de películas desde la fuente de datos.
   *
   * @param countMovies - Número de películas a obtener.
   * @returns Observable que emite el arreglo de películas.
   *
   * @remarks
   * Este método es abstracto y debe ser implementado por
   * las clases concretas como:
   * - {@link MovieLocalRepositoryImpl}
   * - {@link MovieNodeRepositoryImpl}
   * - {@link MovieSpringBootRepositoryImpl}
   *
   * La firma del método es la misma para todas las implementaciones,
   * cumpliendo con el principio de Liskov (L de SOLID).
   *
   * @example
   * ```typescript
   * // En una implementación concreta
   * getAll(countMovies: number): Observable<Movie[]> {
   *   return this.dataService.getMovies(countMovies);
   * }
   * ```
   */
  abstract getAll(countMovies: number): Observable<Movie[]>;
}