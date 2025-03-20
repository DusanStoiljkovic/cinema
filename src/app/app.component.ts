import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { NavBarComponent } from './components/navbar/navbar.component';
import { MoviesComponent } from './components/movies/movies.component';
import { HttpClient } from '@angular/common/http';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { NgIf } from '@angular/common';
import { UserService } from './services/user.service';
import { Router } from '@angular/router';
import { CartModel } from './models/cart.model';
import { CartService } from './services/cart.service';
 
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MatToolbarModule, MatButtonModule, NgIf, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers: [HttpClient]
})
export class AppComponent {
  title = 'cinema';
  public cart: CartModel | null = null

  constructor(private router: Router) {

  }

  getTotalPrice() {
    return CartService.getCart().totalPrice
  }

  getActiveUsers() {
    return UserService.getActiveUsers()
  }

  
  doLogout() {
    localStorage.removeItem('active')
    localStorage.removeItem('cart')
    this.router.navigate(['/login'])
  }
}
