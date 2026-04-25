import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Movie } from '../../../core/domain/models/movie.model';
import { GetAllMoviesUseCase } from '../../../core/domain/usecases/get-all-movies.usecase';
import { MoviesTableComponent } from '../../components/movies-table/movies-table.component';
import { AlertComponent } from '../../components/alert/alert.component';

type State = 'loading' | 'success' | 'error';

@Component({
  selector: 'app-movies-page',
  imports: [CommonModule, MoviesTableComponent, AlertComponent],
  templateUrl: './movies.page.html',
})
export class MoviesPage implements OnInit {
  private readonly getAllMoviesUseCase = inject(GetAllMoviesUseCase);

  movies: Movie[] = [];
  state: State = 'loading';

  ngOnInit(): void {
    this.state = 'loading';

    this.getAllMoviesUseCase.execute(5).subscribe({
      next: (movies) => {
        this.movies = movies;
        this.state = 'success';
      },
      error: () => {
        this.state = 'error';
      },
    });
  }
}