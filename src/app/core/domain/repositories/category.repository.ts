import { Observable } from 'rxjs';
import { Category } from '../models/category.model';

export abstract class CategoryRepository {
  abstract getAll(countCategories: number): Observable<Category[]>;
}
