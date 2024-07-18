import { Routes } from '@angular/router';
import { UserDetailsComponent } from './user-details/user-details.component';
import { UserListComponent } from './user-list/user-list.component';

export const routes: Routes = [
    { path: '', component: UserListComponent },
  { path: 'user/:id', component: UserDetailsComponent }
];
