import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  login(username: string, password: string): Observable<any> {
    console.log(`Logging in with username: ${username}`);
    return this.http.post<any>(`${this.baseUrl}/login`, { username, password }).pipe(
      tap(response => {
        console.log('Login successful');
        localStorage.setItem('access_token', response.token);
        localStorage.setItem('refresh_token', response.refreshToken);
      })
    );
  }

  refreshToken(): Observable<any> {
    const refreshToken = localStorage.getItem('refresh_token');
    console.log(`Refreshing token`);

    return this.http.post<any>(`${this.baseUrl}/refresh`, { token: refreshToken }).pipe(
      tap(response => {
        console.log('Token refreshed successfully');
        localStorage.setItem('access_token', response.token);
      })
    );
  }

  logout() {
    console.log('Logging out');
    localStorage.removeItem('access_token');
    localStorage.removeItem('refresh_token');
  }

  public get loggedIn(): boolean {
    return localStorage.getItem('access_token') !== null;
  }
}
