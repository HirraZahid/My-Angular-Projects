import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReservationService } from '../reservation/reservation.service';
import { Reservation } from '../models/reservation';
import { RouterModule } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
@Component({
  selector: 'app-reservation-list',
  standalone: true,
  imports: [CommonModule,RouterModule,HomeComponent,HttpClientModule],
  templateUrl: './reservation-list.component.html',
  styleUrls: ['./reservation-list.component.scss']
})
export class ReservationListComponent implements OnInit {

  reservations: Reservation[] = [];

  constructor(private reservationService: ReservationService,private http:HttpClient) {}

  ngOnInit(): void {
    this.reservations = this.reservationService.getreservations();
  }

  deleteReservation(id: string): void {
    this.reservationService.deletebyreservationid(id);
    this.reservations = this.reservationService.getreservations();
  }
}