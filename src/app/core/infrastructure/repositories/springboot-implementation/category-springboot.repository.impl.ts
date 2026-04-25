import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { DataService } from '../../services/data.service';
import { Category } from '../../../domain/models/category.model';
import { CategoryRepository } from '../../../domain/repositories/category.repository';

/**
 * Implementación concreta del repositorio de categorías que obtiene los datos
 * desde un backend Spring Boot.
 *
 * @remarks
 * Este repositorio pertenece a la capa de infraestructura.
 * Su responsabilidad es actuar como puente entre la aplicación
 * y la API REST proporcionada por el backend Spring Boot.
 *
 * Delega la comunicación HTTP al servicio {@link DataService}
 * para mantener la separación de responsabilidades.
 *
 * Implementa la interfaz {@link CategoryRepository} definida en el dominio.
 */
@Injectable({ providedIn: 'root' })
export class CategorySpringBootRepositoryImpl implements CategoryRepository {
  /**
   * Servicio de datos encargado de la comunicación con el backend Spring Boot.
   */
  private readonly dataService = inject(DataService);

  /**
   * Obtiene un listado de categorías desde el backend Spring Boot.
   *
   * @param count - Número de categorías a obtener.
   * @returns Observable que emite el arreglo de categorías.
   *
   * @remarks
   * Este método delega la petición al {@link DataService}
   * utilizando el método {@link DataService.getAllCategoriesSpringBoot}.
   */
  getAll(count: number): Observable<Category[]> {
    return this.dataService.getAllCategoriesSpringBoot(count);
  }
}