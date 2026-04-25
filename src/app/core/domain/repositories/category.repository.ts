import { Observable } from 'rxjs';

import { Category } from '../models/category.model';

/**
 * Repositorio abstracto para la gestión de categorías.
 *
 * @remarks
 * Esta interfaz abstracta pertenece a la capa de dominio.
 * Define el contrato que deben implementar todas las
 * implementaciones concretas de repositorios de categorías
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
export abstract class CategoryRepository {
  /**
   * Obtiene un listado de categorías desde la fuente de datos.
   *
   * @param countCategories - Número de categorías a obtener.
   * @returns Observable que emite el arreglo de categorías.
   *
   * @remarks
   * Este método es abstracto y debe ser implementado por
   * las clases concretas como:
   * - {@link CategoryLocalRepositoryImpl}
   * - {@link CategoryNodeRepositoryImpl}
   * - {@link CategorySpringBootRepositoryImpl}
   *
   * La firma del método es la misma para todas las implementaciones,
   * cumpliendo con el principio de Liskov (L de SOLID).
   *
   * @example
   * ```typescript
   * // En una implementación concreta
   * getAll(countCategories: number): Observable<Category[]> {
   *   return this.dataService.getCategories(countCategories);
   * }
   * ```
   */
  abstract getAll(countCategories: number): Observable<Category[]>;
}