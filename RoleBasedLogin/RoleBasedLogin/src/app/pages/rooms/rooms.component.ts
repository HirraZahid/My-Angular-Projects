import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-rooms',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './rooms.component.html',
  styleUrl: './rooms.component.css'
})
export class RoomsComponent {
  rooms = [
    { id: 1, name: 'Room 101', status: 'Available' },
    { id: 2, name: 'Room 102', status: 'Booked' },
    { id: 3, name: 'Room 103', status: 'Available' }
  ];
}
