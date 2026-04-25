import { Component, inject, OnInit } from '@angular/core';
import { AsyncPipe, CommonModule } from '@angular/common';
import { Observable } from 'rxjs';

import { Category } from '../../../core/domain/models/category.model';
import { GetAllCategoriesUseCase } from '../../../core/domain/usecases/get-all-categories.usecase';
import { CategoriesTableComponent } from '../../components/categories-table/categories-table.component';

@Component({
  selector: 'app-categories-page',
  imports: [CommonModule, AsyncPipe, CategoriesTableComponent],
  templateUrl: './categories.page.html',
})
export class CategoriesPage implements OnInit {
  private readonly getAllCategoriesUseCase = inject(GetAllCategoriesUseCase);

  categories$!: Observable<Category[]>;

  ngOnInit(): void {
    this.categories$ = this.getAllCategoriesUseCase.execute(5);
  }
}