import { Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './components/home/home.component';
import { MoviesComponent } from './components/movies/movies.component';
import { UserComponent } from './components/user/user.component';
import { MovieComponent } from './components/movie/movie.component';
import { AuthComponent } from './components/auth/auth.component';
import { SignupComponent } from './components/signup/signup.component';
import { CartComponent } from './components/cart/cart.component';

export const routes: Routes = [
    { path: '', component: HomeComponent},
    { path: 'movies', component: MoviesComponent},
    { path: 'user', component: UserComponent},
    { path: 'movie/:id', component: MovieComponent},
    { path: 'login', component: AuthComponent},
    { path: 'signup', component: SignupComponent},
    { path: 'cart', component: CartComponent},
    { path: '**', redirectTo: ''}
];
