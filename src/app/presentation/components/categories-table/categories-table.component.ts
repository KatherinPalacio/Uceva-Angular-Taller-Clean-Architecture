import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';

import { Category } from '../../../core/domain/models/category.model';

/**
 * Componente de tabla encargado de renderizar el listado de categorías.
 *
 * @remarks
 * Este componente pertenece a la capa de presentación.
 * Recibe un arreglo de categorías a través de una señal de entrada
 * y las muestra en formato tabular.
 *
 * Es un componente puro que no contiene lógica de negocio;
 * únicamente se encarga de la presentación visual de los datos.
 *
 * @example
 * ```html
 * <app-categories-table [categories]="categoriasLista" />
 * ```
 */
@Component({
  selector: 'app-categories-table',
  imports: [CommonModule],
  templateUrl: './categories-table.component.html',
})
export class CategoriesTableComponent {
  /**
   * Listado de categorías a renderizar en la tabla.
   *
   * @remarks
   * Es una señal requerida (input.required), por lo que el componente
   * no se renderizará correctamente si no se proporciona este valor.
   */
  categories = input.required<Category[]>();
}