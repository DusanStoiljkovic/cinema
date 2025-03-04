import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule, NgIf, NgFor} from '@angular/common';
import { MovieModel } from '../../models/movie.model';
import { ApiService } from '../../services/api.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-movies',
  imports: [CommonModule, NgFor, NgIf],
  templateUrl: './movies.component.html',
  styleUrl: './movies.component.css',
  providers: [HttpClient]
})
export class MoviesComponent {
  movies: MovieModel[] = []

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.apiService.getMovies().subscribe({
      next: (data) => {
        this.movies = data;
        console.log(this.movies)
      },
      error: (err) => {
        console.error('Greska pri preuzimanju filmova', err)
      }
    })

    
  }

  getImage(image: string) {
    return `https://image.tmdb.org/t/p/w500${image}`
  }
}
