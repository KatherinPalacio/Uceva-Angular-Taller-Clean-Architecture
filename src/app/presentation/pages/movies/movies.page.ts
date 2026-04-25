import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';

import { Movie } from '../../../core/domain/models/movie.model';
import { GetAllMoviesUseCase } from '../../../core/domain/usecases/get-all-movies.usecase';
import { AlertComponent } from '../../components/alert/alert.component';
import { MoviesTableComponent } from '../../components/movies-table/movies-table.component';

/**
 * Estado de carga de la página de películas.
 *
 * @remarks
 * Permite controlar qué vista se muestra:
 * - `loading`: mientras se consulta la información.
 * - `success`: cuando la información se obtiene correctamente.
 * - `error`: cuando ocurre un error en la consulta.
 */
type State = 'loading' | 'success' | 'error';

/**
 * Página encargada de mostrar el listado de películas.
 *
 * @remarks
 * Este componente pertenece a la capa de presentación.
 * Su responsabilidad es consumir el caso de uso
 * {@link GetAllMoviesUseCase} y renderizar el resultado
 * mediante el componente {@link MoviesTableComponent}.
 *
 * No contiene lógica de negocio; únicamente coordina
 * la carga de datos y el estado visual de la interfaz.
 */
@Component({
  selector: 'app-movies-page',
  imports: [CommonModule, MoviesTableComponent, AlertComponent],
  templateUrl: './movies.page.html',
})
export class MoviesPage implements OnInit {
  /**
   * Caso de uso encargado de obtener el listado de películas.
   */
  private readonly getAllMoviesUseCase = inject(GetAllMoviesUseCase);

  /**
   * Listado de películas que se renderiza en la tabla.
   */
  movies: Movie[] = [];

  /**
   * Estado actual de la página.
   */
  state: State = 'loading';

  /**
   * Inicializa la carga de películas al renderizar la página.
   */
  ngOnInit(): void {
    this.state = 'loading';

    this.getAllMoviesUseCase.execute(5).subscribe({
      next: (movies) => {
        this.movies = movies;
        this.state = 'success';
      },
      error: () => {
        this.state = 'error';
      },
    });
  }
}