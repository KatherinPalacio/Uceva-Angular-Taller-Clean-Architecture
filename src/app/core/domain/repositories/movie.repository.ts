import { Observable } from 'rxjs';
import { Movie } from '../models/movie.model';

export abstract class MovieRepository {
  abstract getAll(countMovies: number): Observable<Movie[]>;
}
