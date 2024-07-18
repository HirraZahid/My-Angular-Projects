import { Injectable } from '@angular/core';
import { Reservation } from '../models/reservation';
// import { HttpClient } from '@angular/common/http';
// import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {

  private reservation: Reservation[]=[];
  // private apiUrl = 'http://localhost:3001';

  // constructor(private http: HttpClient){}

  // this was screaded for loacl stroage now i have commented this out
    constructor(){
    this.reservation = JSON.parse(localStorage.getItem('reservation') || '[]');
    console.log(this.reservation);
  }
  
  // crud 

  getreservations(): Reservation[]{
    localStorage.setItem('reservation', JSON.stringify(this.reservation));
    return this.reservation;
    // return this.http.get<Reservation[]>(`${this.apiUrl}/reservations`);

  }

  getbyreservationid(id:string): Reservation | undefined {
    localStorage.setItem('reservation', JSON.stringify(this.reservation));

    return this.reservation.find(reservation => reservation.id === id );
    // return this.http.get<Reservation>(`${this.apiUrl}/reservations/${id}`);

  }

  addreservation(reservation: Reservation): void {
    reservation.id=Date.now().toString();
    this.reservation.push(reservation);
    console.log(reservation);
    localStorage.setItem('reservation', JSON.stringify(reservation));
    // return this.http.post<Reservation>(`${this.apiUrl}/reservations`, reservation);
  }

  deletebyreservationid(id: string): void {
    // this.reservation = this.reservation.filter(reservation => reservation.id!== id);
    const index = this.reservation.findIndex(reservation => reservation.id === id);
    this.reservation.splice(index, 1);
    localStorage.setItem('reservation', JSON.stringify(this.reservation));

  }

  updatereservation (id:string, updatedreservation: Reservation): void {  
      const index = this.reservation.findIndex(reservation => reservation.id === id);
      // this.reservation[index] = updatedreservation;
      localStorage.setItem('reservation', JSON.stringify(this.reservation));

  }










  
}
