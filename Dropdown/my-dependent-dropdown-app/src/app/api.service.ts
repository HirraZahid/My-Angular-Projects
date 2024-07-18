import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private baseUrl='http://localhost:3003'

  constructor(private http:HttpClient) { }

  getAllClients(): Observable<any> {
    return this.http.get(`${this.baseUrl}/api/GetAllClients`);
  }

  getAllSites(clientId: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/api/GetAllSites?clientId=${clientId}`);
  }

  getBuildingsBySiteId(siteId: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/api/GetBuildingBySiteId?siteId=${siteId}`);
  }

  getFloorsByBuildingId(buildingId: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/GetFloorsByBuildingId?buildingId=${buildingId}`);
  }

}
