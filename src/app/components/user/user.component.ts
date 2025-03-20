import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { MatButtonModule, MatIconAnchor, MatIconButton } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { RouterLink } from '@angular/router';
import { UserModel } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user.service';
import { MatListModule } from '@angular/material/list';
import { MatFormField} from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { CartService } from 'src/app/services/cart.service';
import { CartModel } from 'src/app/models/cart.model';
import { MovieModel } from 'src/app/models/movie.model';

@Component({
  selector: 'app-user',
  imports: [
    NgFor, 
    NgIf,
    MatButtonModule,
    MatCardModule,
    MatListModule,
    MatFormField,
    FormsModule,
    MatTableModule,
    RouterLink,
    MatInputModule
  ],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  public user: UserModel | null = null
  public cart: CartModel | null = null
  public displayedColumns: string[] = [
    'id', 'movieTitle', 
    'count', 'price', 
    'total', 'status', 
    'rating', 'actions']

  constructor() {
    this.user = UserService.getActiveUsers()
    this.cart = CartService.getCart()
  }

  doChangePassword() {
  }

  doPay(id: number) {
    this.cart!.movies = this.cart!.movies.map(obj => {
      if(obj.id === id)
        obj.status = 'paid'
      return obj
    });
    
    
    CartService.updateCart(this.cart)
  }
  
  doCancel(id: number) {
    this.cart!.movies = this.cart!.movies.map(obj => {
      if(obj.id === id)
        obj.status = 'canceled'
      return obj
    })
    CartService.updateCart(this.cart)
  }

  doRating(id: number, boo: boolean) {
    this.cart!.movies = this.cart!.movies.map(obj => {
      if(obj.id === id) 
        obj.rating = boo
      return obj
    })
    CartService.updateCart(this.cart)
  }
}
