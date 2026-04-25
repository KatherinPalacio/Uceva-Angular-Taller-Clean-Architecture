import { inject, Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';

import { DataService } from '../../services/data.service';
import { Category } from '../../../domain/models/category.model';
import { CategoryRepository } from '../../../domain/repositories/category.repository';

/**
 * Implementación concreta del repositorio de categorías que obtiene los datos
 * desde un backend Node.js.
 *
 * @remarks
 * Este repositorio pertenece a la capa de infraestructura.
 * Su responsabilidad es actuar como puente entre la aplicación
 * y la API REST proporcionada por el backend Node.js.
 *
 * Aplica una transformación a los datos recibidos para garantizar
 * que coincidan con la estructura esperada por el modelo {@link Category}.
 *
 * Implementa la interfaz {@link CategoryRepository} definida en el dominio.
 */
@Injectable({ providedIn: 'root' })
export class CategoryNodeRepositoryImpl implements CategoryRepository {
  /**
   * Servicio de datos encargado de la comunicación con el backend Node.js.
   */
  private readonly dataService = inject(DataService);

  /**
   * Obtiene un listado de categorías desde el backend Node.js.
   *
   * @param count - Número de categorías a obtener.
   * @returns Observable que emite el arreglo de categorías transformadas.
   *
   * @remarks
   * Este método delega la petición al {@link DataService}
   * utilizando el método {@link DataService.getAllCategoriesNode}.
   *
   * Se aplica un pipe de transformación con `map` para adaptar
   * la estructura de datos proveniente del backend Node.js
   * al formato esperado por el modelo `Category`.
   * Específicamente, mapea la propiedad `desc` a `description`
   * si la segunda no existe.
   */
  getAll(count: number): Observable<Category[]> {
    return this.dataService.getAllCategoriesNode(count).pipe(
      map((categories: any[]) =>
        categories.map(cat => ({
          id: cat.id,
          name: cat.name,
          description: cat.description ?? cat.desc,
        }))
      )
    );
  }
}