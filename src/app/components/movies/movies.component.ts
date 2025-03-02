import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule, NgIf, NgFor} from '@angular/common';
import { MovieModel } from '../../models/movie.model';
import { ApiService } from '../../services/api.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-movies',
  imports: [CommonModule, NgFor, NgIf],
  templateUrl: './movies.component.html',
  styleUrl: './movies.component.css'
})
export class MoviesComponent {
  movies: MovieModel[] | null = null;
  subscription: Subscription | null = null;

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.subscription = this.apiService.getMovies().subscribe((data: MovieModel[]) => this.movies = data)
  }
  
  ngOnDestroy() {
    if(this.subscription) {
      this.subscription.unsubscribe()
    }
  }
}
