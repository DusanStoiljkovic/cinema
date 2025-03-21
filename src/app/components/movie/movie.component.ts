import { Component } from '@angular/core';
import { MovieModel } from '../../models/movie.model';
import { MovieService } from '../../services/movie.service';
import { Router } from '@angular/router';
import { ActivatedRoute, Route } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { NgFor, NgIf } from '@angular/common';
import { MatFormField } from '@angular/material/form-field';
import { CartService } from 'src/app/services/cart.service';
import { UserService } from 'src/app/services/user.service';
import { AppComponent } from 'src/app/app.component';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 
  'app-movie',
  imports: [FormsModule, MatButtonModule, NgFor],
  templateUrl: './movie.component.html',
  styleUrl: './movie.component.css'
})
export class MovieComponent {
  public movie: MovieModel | undefined = undefined
  public numberOfTickets: number = 0
  public showTime: string = ''
  public allShowTimes: string[] = MovieService.allShowTimes

  constructor(private route: ActivatedRoute, private router: Router, private toastr: ToastrService, private api: MovieService) {
    route.params.subscribe(params => {
      this.api.getTrending().subscribe((res: MovieModel[]) => {
        this.movie = res.find(obj => obj.id === params['id'])
      })
    })
  }

  reserveTicket() {
    if(!this.movie || this.numberOfTickets < 1) return 

    const userEmail = UserService.getActiveUsers()?UserService.getActiveUsers()!.email:'test@example.com' 

    let cart = CartService.getCart()
    let movie = cart.movies.find(obj => obj.movieId === this.movie!.id)
    if(!movie || movie.status === 'paid' || movie.status === 'watched' || movie.status === 'canceled') {
      CartService.addInCart({
          userEmail: userEmail,
          movieId: this.movie.id,
          movieTitle: this.movie.title,
          count: this.numberOfTickets,
          pricePerItem: 499,
          status: 'ordered',
          rating: null
      }, 0)
      this.toastr.success('Uspesno ste rezervisali', 'Obavestenje')
    } else {
      movie.count += this.numberOfTickets
      CartService.updateCart(cart)
    }
  }

  goBack() {
    this.router.navigate(['/'])
  }
}
