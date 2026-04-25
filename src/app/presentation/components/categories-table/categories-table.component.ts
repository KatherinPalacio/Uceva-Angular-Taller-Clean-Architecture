import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';
import { Category } from '../../../core/domain/models/category.model';

@Component({
  selector: 'app-categories-table',
  imports: [CommonModule],
    templateUrl: './categories-table.component.html',
})
export class CategoriesTableComponent {
  categories = input.required<Category[]>();
}