import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-packages',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './packages.component.html',
  styleUrl: './packages.component.css'
})
export class PackagesComponent {
  packages = [
    { id: 1, name: 'Basic Package', features: ['Feature 1', 'Feature 2'] },
    { id: 2, name: 'Premium Package', features: ['Feature 1', 'Feature 2', 'Feature 3'] }
  ];
}