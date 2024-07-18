import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent {
  users = [
    { id: 1, username: 'admin', role: 'admin' },
    { id: 2, username: 'client', role: 'client' }
  ];
}