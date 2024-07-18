import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = 'https://65f15763da8c6584131d7aef.mockapi.io/users';

  constructor(private http: HttpClient) { }

  getUsers(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  getUserById(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }
  addUser(user: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, user);
  }
  updateUser(user: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/${user.id}`, user);
  }

  deleteUser(id: number): Observable<any> {
    console.log(id + ' deleted');
    console.log(this.apiUrl + ' deleted');
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
