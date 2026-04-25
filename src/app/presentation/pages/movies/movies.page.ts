import { Component, inject, OnInit } from '@angular/core';
import { AsyncPipe, CommonModule } from '@angular/common';
import { Observable } from 'rxjs';

import { Movie } from '../../../core/domain/models/movie.model';
import { GetAllMoviesUseCase } from '../../../core/domain/usecases/get-all-movies.usecase';
import { MoviesTableComponent } from '../../components/movies-table/movies-table.component';

@Component({
  selector: 'app-movies-page',
  imports: [CommonModule, AsyncPipe, MoviesTableComponent],
  templateUrl: './movies.page.html',
})
export class MoviesPage implements OnInit {
  private readonly getAllMoviesUseCase = inject(GetAllMoviesUseCase);

  movies$!: Observable<Movie[]>;

  ngOnInit(): void {
    this.movies$ = this.getAllMoviesUseCase.execute(5);
  }
}