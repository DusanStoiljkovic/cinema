import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavBarComponent } from './components/navbar/navbar.component';
import { HeroComponent } from './components/hero/hero.component';
import { MoviesComponent } from './components/movies/movies.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavBarComponent, HeroComponent, MoviesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'cinema';
}
