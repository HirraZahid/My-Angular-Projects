import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DropdownsComponent } from './dropdowns/dropdowns.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,DropdownsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'my-dependent-dropdown-app';
}
