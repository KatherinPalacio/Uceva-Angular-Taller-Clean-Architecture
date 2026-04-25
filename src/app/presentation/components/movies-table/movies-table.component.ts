import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';

import { Movie } from '../../../core/domain/models/movie.model';

/**
 * Componente de tabla encargado de renderizar el listado de películas.
 *
 * @remarks
 * Este componente pertenece a la capa de presentación.
 * Recibe un arreglo de películas a través de una señal de entrada
 * y las muestra en formato tabular.
 *
 * Es un componente puro que no contiene lógica de negocio;
 * únicamente se encarga de la presentación visual de los datos.
 *
 * @example
 * ```html
 * <app-movies-table [movies]="peliculasLista" />
 * ```
 */
@Component({
  selector: 'app-movies-table',
  imports: [CommonModule],
  templateUrl: './movies-table.component.html',
})
export class MoviesTableComponent {
  /**
   * Listado de películas a renderizar en la tabla.
   *
   * @remarks
   * Es una señal requerida (input.required), por lo que el componente
   * no se renderizará correctamente si no se proporciona este valor.
   */
  movies = input.required<Movie[]>();
}