import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DataService } from '../../services/data.service';
import { Category } from '../../../domain/models/category.model';
import { CategoryRepository } from '../../../domain/repositories/category.repository';
import { map } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class CategoryNodeRepositoryImpl implements CategoryRepository {
  private readonly dataService = inject(DataService);

  getAll(count: number): Observable<Category[]> {
  return this.dataService.getAllCategoriesNode(count).pipe(
    map((categories: any[]) =>
      categories.map(cat => ({
        id: cat.id,
        name: cat.name,
        description: cat.description ?? cat.desc,
      }))
    )
  );
}
}