import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private currentUser: User | null = null;

  constructor(private router: Router) {}

  login(username: string, password: string): boolean {
    // Mock authentication - replace with real authentication logic
    if (username === 'admin' && password === 'admin') {
      this.currentUser = { id: 1, username: 'admin', role: 'admin', password: 'admin' };
      return true;
    } else if (username === 'client' && password === 'client') {
      this.currentUser = { id: 2, username: 'client', role: 'client', password: 'client' };
      return true;
    }
    return false;
  }
  

  logout(): void {
    this.currentUser = null;
  }

  getUser(): User | null {
    return this.currentUser;
  }
  getCurrentUser(): User | null {
    return this.currentUser;
  }
  isLoggedIn(): boolean {
    return this.currentUser !== null;
  }
}
