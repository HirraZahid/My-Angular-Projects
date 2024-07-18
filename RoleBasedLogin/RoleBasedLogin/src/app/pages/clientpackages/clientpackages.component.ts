import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-clientpackages',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './clientpackages.component.html',
  styleUrl: './clientpackages.component.css'
})
export class ClientPackagesComponent {
  packages = [
    { id: 1, name: 'Basic Package', description: 'Includes basic features.' },
    { id: 2, name: 'Premium Package', description: 'Includes premium features.' }
  ];
}
