import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Category } from '../../../domain/models/category.model';
import { CategoryRepository } from '../../../domain/repositories/category.repository';
import { CATEGORIES_MOCK } from '../../../../mocks/categories.mocks';

@Injectable({
  providedIn: 'root',
})
export class CategoryLocalRepositoryImpl implements CategoryRepository {

  getAll(count: number): Observable<Category[]> {
    return of(CATEGORIES_MOCK.slice(0, count));
  }
}