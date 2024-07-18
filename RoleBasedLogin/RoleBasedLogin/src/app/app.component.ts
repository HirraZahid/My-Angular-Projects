import { Component } from '@angular/core';
import { RouterOutlet,Router ,RouterLink} from '@angular/router';
import { CommonModule } from '@angular/common';
import { AuthService } from './services/auth.service';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CommonModule,RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  constructor(private authService: AuthService, private router: Router) {}

  isAdmin() {
    return this.authService.getCurrentUser()?.role === 'admin';
  }

  isClient() {
    return this.authService.getCurrentUser()?.role === 'client';
  }
  isLogedIn() {

    return this.authService.isLoggedIn();
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
