import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination'; // Import the pagination module

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [CommonModule, RouterLink, ReactiveFormsModule, FormsModule, NgxPaginationModule],
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  users: any[] = [];
  searchTerm: string = '';
  searchId: string = '';
  editUserForm: FormGroup;
  newUserForm: FormGroup;
  editingUserId: number | null = null;
  p: number = 1; // Current page number
  itemsPerPage: number = 5; // Items per page

  constructor(private userService: UserService, private fb: FormBuilder) { 
    this.editUserForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.pattern('^\\d{11}$')]]
    });
    this.newUserForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      username: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.pattern('^\\d{11}$')]]
    });
  }

  ngOnInit(): void {
    this.loadUsers();
  }

  loadUsers(): void {
    this.userService.getUsers().subscribe(data => {
      this.users = data;
      console.log(this.users);
    });
  }

  search(): void {
    this.p = 1; // Reset the page number to 1
    this.userService.getUsers().subscribe(data => {
      const term = this.searchTerm.toLowerCase();
      this.users = data.filter(user =>
        user.name.toLowerCase().includes(term)
      );
      if (this.users.length === 0) {
        console.log('No user matches the search criteria');
      }
    });
  }

  startEditing(user: any): void {
    this.editingUserId = user.id;
    this.editUserForm.setValue({
      name: user.name,
      email: user.email,
      phone: user.phone
    });
  }

  cancelEditing(): void {
    this.editingUserId = null;
  }

  saveUser(): void {
    if (this.editUserForm.valid) {
      const updatedUser = {
        ...this.editUserForm.value,
        id: this.editingUserId
      };
      console.log(updatedUser);
      this.userService.updateUser(updatedUser).subscribe(() => {
        this.loadUsers();  // Reload the user list after updating
        this.editingUserId = null;
      }, error => {
        console.error('Error updating user:', error);
      });
    }
  }

  deleteUser(id: number): void {
    this.userService.deleteUser(id).subscribe(() => {
      console.log('User deleted');
      this.loadUsers();  // Reload the user list after deleting
    }, error => {
      console.error('Error deleting user:', error);
    });
  }

  addUser(): void {
    if (this.newUserForm.valid) {
      const newUser = {
        name: this.newUserForm.get('name')?.value,
        username: this.newUserForm.get('username')?.value,
        email: this.newUserForm.get('email')?.value,
        phone: this.newUserForm.get('phone')?.value
      };
      console.log(newUser);  // Log the new user object for debugging purposes
  
      this.userService.addUser(newUser).subscribe({
        next: () => {
          this.loadUsers();  // Reload the user list after adding a new user
          this.newUserForm.reset();
        },
        error: (error) => {
          console.error('Error adding user:', error);
        }
      });
    }
  }
}
