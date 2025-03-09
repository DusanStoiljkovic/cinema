import { Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './components/home/home.component';
import { MoviesComponent } from './components/movies/movies.component';
import { SeriesComponent } from './components/series/series.component';
import { UserComponent } from './components/user/user.component';
import { MovieComponent } from './components/movie/movie.component';
import { SerieComponent } from './components/serie/serie.component';

export const routes: Routes = [
    { path: '', component: HomeComponent},
    { path: 'movies', component: MoviesComponent},
    { path: 'series', component: SeriesComponent},
    { path: 'user', component: UserComponent},
    { path: 'movie/:id', component: MovieComponent},
    { path: 'serie/:id', component: SerieComponent},
    { path: '**', redirectTo: ''}
];
