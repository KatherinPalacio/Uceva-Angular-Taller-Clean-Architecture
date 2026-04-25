import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Category } from '../../../core/domain/models/category.model';
import { GetAllCategoriesUseCase } from '../../../core/domain/usecases/get-all-categories.usecase';
import { CategoriesTableComponent } from '../../components/categories-table/categories-table.component';
import { AlertComponent } from '../../components/alert/alert.component';

type State = 'loading' | 'success' | 'error';

@Component({
  selector: 'app-categories-page',
  imports: [CommonModule, CategoriesTableComponent, AlertComponent],
  templateUrl: './categories.page.html',
})
export class CategoriesPage implements OnInit {
  private readonly getAllCategoriesUseCase = inject(GetAllCategoriesUseCase);

  categories: Category[] = [];
  state: State = 'loading';

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