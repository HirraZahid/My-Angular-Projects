import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-click-listener',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './click-listener.component.html',
  styleUrl: './click-listener.component.scss'
})

export class ClickListenerComponent {
  websiteUrl: string = '';

  constructor(public sanitizer: DomSanitizer) {}

  openWebsite() {
    // Construct the proxy URL
    this.websiteUrl = `http://localhost:3000/proxy?url=${encodeURIComponent(this.websiteUrl)}`;
    return false; // Prevent the form from submitting
  }

  attachClickListener() {
    const iframe = document.querySelector('iframe');
    if (iframe) {
      const iframeDocument = iframe.contentDocument || iframe.contentWindow?.document;
      if (iframeDocument) {
        iframeDocument.addEventListener('click', this.logElementDetails);
      }
    }
  }

  logElementDetails(event: MouseEvent) {
    const target = event.target as HTMLElement;
    const id = target.id ? `ID: ${target.id}` : 'No ID';
    const className = target.className ? `Class: ${target.className}` : 'No Class';
    console.log(`Clicked element - ${id}, ${className}`);
  }
}
