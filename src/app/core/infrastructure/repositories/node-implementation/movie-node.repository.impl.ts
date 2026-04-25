import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DataService } from '../../services/data.service';
import { Movie } from '../../../domain/models/movie.model';
import { MovieRepository } from '../../../domain/repositories/movie.repository';

@Injectable({ providedIn: 'root' })
export class MovieNodeRepositoryImpl implements MovieRepository {
  private readonly dataService = inject(DataService);

  getAll(count: number): Observable<Movie[]> {
    return this.dataService.getAllMoviesNode(count);
  }
}