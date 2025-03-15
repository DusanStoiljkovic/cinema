import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { UserService } from '../../services/user.service';
import { ActivatedRoute, Route, Router, RouterLink } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MovieModel } from 'src/app/models/movie.model';
import { MovieService } from 'src/app/services/movie.service';
import { MatOptionModule } from '@angular/material/core';
import { NgFor } from '@angular/common';
import { UserModel } from 'src/app/models/user.model';

@Component({
  selector: 'app-signup',
  imports: [RouterLink, MatCardModule, MatFormFieldModule, FormsModule, MatButtonModule, MatInputModule, RouterLink, FormsModule, MatSelectModule, MatOptionModule, NgFor],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {
  public firstName: string = ''
  public lastName: string = ''
  public email: string = ''
  public password: string = ''
  public address: string = ''
  public phone: string = ''
  public favouriteMovies: string[] = []
  public movies: MovieModel[] | null = []
  
  constructor(private router: Router) {
    this.movies = MovieService.movies
  }

  doSignUp() {
    let user: UserModel = {
      firstName: this.firstName,
      lastName: this.lastName,
      email: this.email,
      password: this.password,
      address: this.address,
      phone: this.phone,
      favouriteMovies: this.favouriteMovies,
      orders: []
    }

    let result = UserService.doSignUp(user)

    if(result) {
      UserService.doLogin(user.email, user.password)
      this.router.navigate(['/'])
    } else {
      alert("Error while signing up, try later!")
    }

    if(result) {
      alert('Uspesno ste se registrovali')
      UserService.doLogin(this.email, this.password)
      this.router.navigate(['/home'])
    } else {
      alert('Greska pri registraciji')
    }
  }

}