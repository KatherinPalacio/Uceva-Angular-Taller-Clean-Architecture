import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Movie } from '../models/movie.model';
import { MovieRepository } from '../repositories/movie.repository';

@Injectable({
  providedIn: 'root',
})
export class GetAllMoviesUseCase {

  constructor(private movieRepository: MovieRepository) {}

  execute(count: number): Observable<Movie[]> {
    return this.movieRepository.getAll(count);
  }
}