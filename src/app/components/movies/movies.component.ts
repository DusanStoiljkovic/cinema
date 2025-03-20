import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule, NgIf, NgFor} from '@angular/common';
import { MovieModel } from '../../models/movie.model';
import { HttpClient } from '@angular/common/http';
import { MovieService } from '../../services/movie.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-movies',
  imports: [CommonModule, NgFor, NgIf, RouterLink],
  templateUrl: './movies.component.html',
  styleUrl: './movies.component.css',
  providers: [HttpClient]
})
export class MoviesComponent {
  movies: MovieModel[] = []

  constructor(private api: MovieService) {
    this.api.getTrending().subscribe((res: MovieModel[]) => {
      this.movies = res
    })
  }
}
