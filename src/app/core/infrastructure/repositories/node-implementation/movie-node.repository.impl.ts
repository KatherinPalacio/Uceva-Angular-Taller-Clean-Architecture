import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DataService } from '../../services/data.service';
import { Movie } from '../../../domain/models/movie.model';
import { MovieRepository } from '../../../domain/repositories/movie.repository';
import { map } from 'rxjs';


@Injectable({ providedIn: 'root' })
export class MovieNodeRepositoryImpl implements MovieRepository {
  private readonly dataService = inject(DataService);

  getAll(count: number): Observable<Movie[]> {
    return this.dataService.getAllMoviesNode(count).pipe(
      map((movies: any[]) =>
        movies.map(movie => ({
          id: movie.id,
          name: movie.name ?? movie.title,
          genre: movie.genre ?? movie.category,
          year: movie.year ?? movie.releaseYear,
        }))
      )
    )
  };
}