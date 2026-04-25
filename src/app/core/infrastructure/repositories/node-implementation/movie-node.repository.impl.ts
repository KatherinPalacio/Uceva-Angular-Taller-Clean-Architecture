import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { DataService } from '../../services/data.service';
import { Movie } from '../../../domain/models/movie.model';
import { MovieRepository } from '../../../domain/repositories/movie.repository';

/**
 * Implementación concreta del repositorio de películas que obtiene los datos
 * desde un backend Node.js.
 *
 * @remarks
 * Este repositorio pertenece a la capa de infraestructura.
 * Su responsabilidad es actuar como puente entre la aplicación
 * y la API REST proporcionada por el backend Node.js.
 *
 * Delega la comunicación HTTP al servicio {@link DataService}
 * para mantener la separación de responsabilidades.
 *
 * Implementa la interfaz {@link MovieRepository} definida en el dominio.
 */
@Injectable({ providedIn: 'root' })
export class MovieNodeRepositoryImpl implements MovieRepository {
  /**
   * Servicio de datos encargado de la comunicación con el backend Node.js.
   */
  private readonly dataService = inject(DataService);

  /**
   * Obtiene un listado de películas desde el backend Node.js.
   *
   * @param count - Número de películas a obtener.
   * @returns Observable que emite el arreglo de películas.
   *
   * @remarks
   * Este método delega la petición al {@link DataService}
   * utilizando el método {@link DataService.getAllMoviesNode}.
   */
  getAll(count: number): Observable<Movie[]> {
    return this.dataService.getAllMoviesNode(count);
  }
}