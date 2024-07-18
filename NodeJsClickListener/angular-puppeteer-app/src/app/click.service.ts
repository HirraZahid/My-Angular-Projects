import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClickService {
  private serverUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  openUrl(url: string): Observable<any> {
    return this.http.post(`${this.serverUrl}/open-url`, { url });
  }

  sendClickInfo(info: { id: string; className: string }): Observable<any> {
    return this.http.post(`${this.serverUrl}/click-info`, info);
  }
}
