import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Movie } from '../../../domain/models/movie.model';
import { MovieRepository } from '../../../domain/repositories/movie.repository';
import { MOVIES_MOCK } from '../../../../mocks/movies.mocks';

@Injectable({
  providedIn: 'root',
})
export class MovieLocalRepositoryImpl implements MovieRepository {

  getAll(count: number): Observable<Movie[]> {
    return of(MOVIES_MOCK.slice(0, count));
  }
}