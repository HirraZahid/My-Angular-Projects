import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ClickListenerComponent } from './click-listener/click-listener.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,ClickListenerComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'clickListener';
}
