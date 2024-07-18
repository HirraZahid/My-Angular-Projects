import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { AuthGuard } from './guards/auth.guard';
import { RoleGuard } from './guards/role.guard';
import { RoomsComponent } from './pages/rooms/rooms.component';
import { RoomBookingComponent } from './pages/roombooking/roombooking.component';
import { ClientPackagesComponent } from './pages/clientpackages/clientpackages.component';
import { PackagesComponent } from './pages/packages/packages.component';
import { UsersComponent } from './pages/users/users.component';

export const routes: Routes = [
    { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard, RoleGuard], data: { expectedRole: 'admin' } },
  { path: 'packages', component: PackagesComponent, canActivate: [AuthGuard, RoleGuard], data: { expectedRole: 'admin' } },
  { path: 'users', component: UsersComponent, canActivate: [AuthGuard, RoleGuard], data: { expectedRole: 'admin' } },
  { path: 'rooms', component: RoomsComponent, canActivate: [AuthGuard, RoleGuard], data: { expectedRole: 'client' } },
  { path: 'booking', component: RoomBookingComponent, canActivate: [AuthGuard, RoleGuard], data: { expectedRole: 'client' } },
  { path: 'clientpackages', component: ClientPackagesComponent, canActivate: [AuthGuard, RoleGuard], data: { expectedRole: 'client' } }


];
