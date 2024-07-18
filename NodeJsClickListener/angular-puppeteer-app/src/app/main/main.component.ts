import { Component } from '@angular/core';
import { ClickService } from '../click.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [CommonModule, FormsModule], // Do not import HttpClient here
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {
  url: string = '';

  constructor(private clickService: ClickService) {}

  openUrl() {
    this.clickService.openUrl(this.url).subscribe(response => {
      console.log('URL opened successfully:', response);
    }, error => {
      console.error('Error opening URL:', error);
    });
  }
}
