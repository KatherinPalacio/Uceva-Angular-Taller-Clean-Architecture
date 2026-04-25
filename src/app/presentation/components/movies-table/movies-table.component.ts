import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';
import { Movie } from '../../../core/domain/models/movie.model';

@Component({
  selector: 'app-movies-table',
  imports: [CommonModule],
    templateUrl: './movies-table.component.html',
})
export class MoviesTableComponent {
  movies = input.required<Movie[]>();
}