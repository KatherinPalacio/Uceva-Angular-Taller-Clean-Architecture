import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Movie } from '../models/movie.model';
import { MovieRepository } from '../repositories/movie.repository';

/**
 * Caso de uso encargado de obtener el listado de películas.
 *
 * @remarks
 * Este caso de uso pertenece a la capa de dominio.
 * Su responsabilidad es ejecutar la lógica de negocio para
 * recuperar un listado de películas desde el repositorio correspondiente.
 *
 * No contiene detalles de implementación de infraestructura;
 * únicamente orquesta la llamada al repositorio y retorna
 * los datos al presentador.
 *
 * @example
 * ```typescript
 * export class MoviesPage implements OnInit {
 *   private getAllMoviesUseCase = inject(GetAllMoviesUseCase);
 *
 *   ngOnInit(): void {
 *     this.getAllMoviesUseCase.execute(5).subscribe(movies => {
 *       console.log(movies);
 *     });
 *   }
 * }
 * ```
 */
@Injectable({
  providedIn: 'root',
})
export class GetAllMoviesUseCase {
  /**
   * Constructor del caso de uso.
   *
   * @param movieRepository - Repositorio de películas inyectado.
   * @remarks
   * Se utiliza inyección de dependencias por constructor
   * para mantener el principio de inversión de dependencias.
   */
  constructor(private movieRepository: MovieRepository) {}

  /**
   * Ejecuta el caso de uso para obtener un listado de películas.
   *
   * @param count - Número de películas a obtener.
   * @returns Observable que emite el arreglo de películas.
   *
   * @remarks
   * Este método delega la operación al repositorio inyectado.
   * No aplica transformaciones ni lógica adicional;
   * simplemente propaga la llamada al repositorio correspondiente.
   *
   * @example
   * ```typescript
   * getAllMoviesUseCase.execute(10).subscribe({
   *   next: (movies) => console.log('Películas:', movies),
   *   error: (err) => console.error('Error:', err)
   * });
   * ```
   */
  execute(count: number): Observable<Movie[]> {
    return this.movieRepository.getAll(count);
  }
}