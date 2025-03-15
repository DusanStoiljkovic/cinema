import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { MovieModel } from '../../models/movie.model';
import { MovieService } from '../../services/movie.service';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  imports: [CommonModule, MatButtonModule, RouterLink]
})
export class HomeComponent {
  public movies: MovieModel[] | null = [];

  constructor() { 
    this.movies = MovieService.movies
  }

}