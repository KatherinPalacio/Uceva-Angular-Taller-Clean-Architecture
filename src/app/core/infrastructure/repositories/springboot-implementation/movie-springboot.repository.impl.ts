// movie-springboot.repository.impl.ts
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { DataService } from '../../services/data.service';
import { Movie } from '../../../domain/models/movie.model';
import { MovieRepository } from '../../../domain/repositories/movie.repository';

/**
 * Implementación concreta del repositorio de películas que obtiene los datos
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
 * Implementa la interfaz {@link MovieRepository} definida en el dominio.
 */
@Injectable({ providedIn: 'root' })
export class MovieSpringBootRepositoryImpl implements MovieRepository {
  /**
   * Servicio de datos encargado de la comunicación con el backend Spring Boot.
   */
  private readonly dataService = inject(DataService);

  /**
   * Obtiene un listado de películas desde el backend Spring Boot.
   *
   * @param count - Número de películas a obtener.
   * @returns Observable que emite el arreglo de películas.
   *
   * @remarks
   * Este método delega la petición al {@link DataService}
   * utilizando el método {@link DataService.getAllMoviesSpringBoot}.
   */
  getAll(count: number): Observable<Movie[]> {
    return this.dataService.getAllMoviesSpringBoot(count);
  }
}