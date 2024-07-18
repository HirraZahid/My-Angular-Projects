import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { WindowService } from './window.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-url-navigator';
  url: string = '';
  clickedElementInfo: string = '';

  constructor(private windowService: WindowService) {}

  navigate() {
    this.getDeferral()
      .then(() => {
        console.log('Opening window...');
        return this.windowService.openWindow(this.url);
      })
      .then(() => {
        console.log('Window opened successfully');
        this.complete();
      })
      .catch((err) => {
        console.error('Failed to open window:', err);
        this.complete();
      });
  }

  private getDeferral(): Promise<void> {
    console.log('Getting deferral...');
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve();
      }, 0);
    });
  }

  private complete() {
    console.log('Completing deferral...');
  }
}
