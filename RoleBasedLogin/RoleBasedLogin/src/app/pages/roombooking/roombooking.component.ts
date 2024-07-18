import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-roombooking',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './roombooking.component.html',
  styleUrl: './roombooking.component.css'
})
export class RoomBookingComponent {
  bookings = [
    { id: 1, room: 'Room 101', client: 'Client A', date: '2024-07-18' },
    { id: 2, room: 'Room 102', client: 'Client B', date: '2024-07-19' }
  ];
}