import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Category } from '../models/category.model';
import { CategoryRepository } from '../repositories/category.repository';

/**
 * Caso de uso encargado de obtener el listado de categorías.
 *
 * @remarks
 * Este caso de uso pertenece a la capa de dominio.
 * Su responsabilidad es ejecutar la lógica de negocio para
 * recuperar un listado de categorías desde el repositorio correspondiente.
 *
 * No contiene detalles de implementación de infraestructura;
 * únicamente orquesta la llamada al repositorio y retorna
 * los datos al presentador.
 *
 * @example
 * ```typescript
 * export class CategoriesPage implements OnInit {
 *   private getAllCategoriesUseCase = inject(GetAllCategoriesUseCase);
 *
 *   ngOnInit(): void {
 *     this.getAllCategoriesUseCase.execute(5).subscribe(categories => {
 *       console.log(categories);
 *     });
 *   }
 * }
 * ```
 */
@Injectable({
  providedIn: 'root',
})
export class GetAllCategoriesUseCase {
  /**
   * Constructor del caso de uso.
   *
   * @param categoryRepository - Repositorio de categorías inyectado.
   * @remarks
   * Se utiliza inyección de dependencias por constructor
   * para mantener el principio de inversión de dependencias.
   */
  constructor(private categoryRepository: CategoryRepository) {}

  /**
   * Ejecuta el caso de uso para obtener un listado de categorías.
   *
   * @param count - Número de categorías a obtener.
   * @returns Observable que emite el arreglo de categorías.
   *
   * @remarks
   * Este método delega la operación al repositorio inyectado.
   * No aplica transformaciones ni lógica adicional;
   * simplemente propaga la llamada al repositorio correspondiente.
   *
   * @example
   * ```typescript
   * getAllCategoriesUseCase.execute(10).subscribe({
   *   next: (categories) => console.log('Categorías:', categories),
   *   error: (err) => console.error('Error:', err)
   * });
   * ```
   */
  execute(count: number): Observable<Category[]> {
    return this.categoryRepository.getAll(count);
  }
}