import { Component, OnInit } from '@angular/core';
import { MovieModel } from '../../models/movie.model';
import { ApiService } from '../../services/api.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css',
  providers: [HttpClient]
})
export class HeroComponent implements OnInit {
  public movies: MovieModel[] = []

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.apiService.getMovies().subscribe({
      next: (response) => {
        this.movies = response
      },
      error: (err) => {
        console.error("Greska pri preuzimanju filmovia", err)
      }
    })
  }

  getImage(): string {
    if(this.movies.length > 0 && this.movies[0].poster_path)
      return `https://image.tmdb.org/t/p/original${this.movies[0].poster_path}`;
    return 'assets/images/default-movie.jpg'
  }
}