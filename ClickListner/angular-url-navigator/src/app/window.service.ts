import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WindowService {
  private newWindow: Window | null = null;

  openWindow(url: string): Promise<void> {
    return new Promise((resolve, reject) => {
      console.log('Attempting to open new window...');
      this.newWindow = window.open(url, '_blank');

      if (this.newWindow) {
        console.log('New window opened, waiting for it to load...');
        this.newWindow.addEventListener('load', () => {
          console.log('New window loaded, injecting script...');
          this.injectScript();
          resolve();
        });
        this.newWindow.addEventListener('error', (err) => {
          console.error('Error occurred in new window:', err);
          reject(err);
        });
      } else {
        console.error('Failed to open new window');
        reject(new Error('Failed to open new window'));
      }
    });
  }

  private injectScript() {
    if (this.newWindow) {
      const scriptContent = `
        console.log('HTML content of the new window:', document.documentElement.outerHTML);
        document.addEventListener('click', function(event) {
          const target = event.target;
          const id = target.id || 'No ID found';
          const className = target.className || 'No class found';
          alert('Clicked element - ID: ' + id + ', Class: ' + className);
        });
      `;

      const script = this.newWindow.document.createElement('script');
      script.textContent = scriptContent;
      this.newWindow.document.head.appendChild(script);
    }
  }
}
