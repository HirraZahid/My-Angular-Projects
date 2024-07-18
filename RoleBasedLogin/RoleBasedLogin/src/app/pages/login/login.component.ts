import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  username: string = '';
  password: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  login(): void {
    if (this.authService.login(this.username, this.password)) {
      const user = this.authService.getUser();
      if (user?.role === 'admin') {
        this.router.navigate(['/dashboard']);
      } else if (user?.role === 'client') {
        this.router.navigate(['/booking']);
      }
    } else {
      alert('Invalid credentials');
    }
  }
}