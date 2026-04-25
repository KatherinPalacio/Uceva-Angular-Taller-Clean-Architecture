import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from '../models/category.model';
import { CategoryRepository } from '../repositories/category.repository';

@Injectable({
  providedIn: 'root',
})
export class GetAllCategoriesUseCase {

  constructor(private categoryRepository: CategoryRepository) {}

  execute(count: number): Observable<Category[]> {
    return this.categoryRepository.getAll(count);
  }
}