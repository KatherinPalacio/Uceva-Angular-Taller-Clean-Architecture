import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Category } from '../../../core/domain/models/category.model';
import { GetAllCategoriesUseCase } from '../../../core/domain/usecases/get-all-categories.usecase';
import { CategoriesTableComponent } from '../../components/categories-table/categories-table.component';
import { AlertComponent } from '../../components/alert/alert.component';

/**
 * Estado de carga de la página de categorías.
 *
 * @remarks
 * Permite controlar qué vista se muestra:
 * - `loading`: mientras se consulta la información.
 * - `success`: cuando la información se obtiene correctamente.
 * - `error`: cuando ocurre un error en la consulta.
 */
type State = 'loading' | 'success' | 'error';

/**
 * Página encargada de mostrar el listado de categorías.
 *
 * @remarks
 * Este componente pertenece a la capa de presentación.
 * Su responsabilidad es consumir el caso de uso
 * {@link GetAllCategoriesUseCase} y renderizar el resultado
 * mediante el componente {@link CategoriesTableComponent}.
 *
 * No contiene lógica de negocio; únicamente coordina
 * la carga de datos y el estado visual de la interfaz.
 */
@Component({
  selector: 'app-categories-page',
  imports: [CommonModule, CategoriesTableComponent, AlertComponent],
  templateUrl: './categories.page.html',
})
export class CategoriesPage implements OnInit {
  /**
   * Caso de uso encargado de obtener el listado de categorías.
   */
  private readonly getAllCategoriesUseCase = inject(GetAllCategoriesUseCase);

  /**
   * Listado de categorías que se renderiza en la tabla.
   */
  categories: Category[] = [];

  /**
   * Estado actual de la página.
   */
  state: State = 'loading';

  /**
   * Inicializa la carga de categorías al renderizar la página.
   */
  ngOnInit(): void {
    this.state = 'loading';

    this.getAllCategoriesUseCase.execute(5).subscribe({
      next: (categories) => {
        this.categories = categories;
        this.state = 'success';
      },
      error: () => {
        this.state = 'error';
      },
    });
  }
}