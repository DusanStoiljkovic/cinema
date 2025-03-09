import { Component } from '@angular/core';
import { MovieModel } from '../../models/movie.model';
import { MovieService } from '../../services/movie.service';
import { Router } from '@angular/router';
import { ActivatedRoute, Route } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 
  'app-movie',
  imports: [FormsModule, MatButtonModule, NgFor, NgIf],
  templateUrl: './movie.component.html',
  styleUrl: './movie.component.css'
})
export class MovieComponent {
  public movie: MovieModel | null = null
  public numberOfTickets: number = 0
  public showTime: string = ''
  public allShowTimes: string[] = MovieService.allShowTimes

  constructor(private route: ActivatedRoute, private router: Router) {
    route.params.subscribe(params => {
      this.movie = MovieService.getMovieById(params['id'])
    })
  }

  reserveTicket() {

  }

  goBack() {
    this.router.navigate(['/'])
  }
}
