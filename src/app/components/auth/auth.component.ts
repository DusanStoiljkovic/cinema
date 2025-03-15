import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { ActivatedRoute, Route, RouterLink } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  imports: [MatCardModule, MatFormFieldModule, FormsModule, MatInputModule, RouterLink],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.css'
})
export class AuthComponent {
  public email: string = ''
  public password: string = ''

  constructor(private router: Router) {}

  doLogin() {
    if(UserService.doLogin(this.email, this.password)) {
      this.router.navigate(['/'])
      return
    } else {
      alert('Error while logging')
    }
  }
}

