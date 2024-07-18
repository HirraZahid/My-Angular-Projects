import { Component,OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-dropdowns',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dropdowns.component.html',
  styleUrl: './dropdowns.component.css'
})
export class DropdownsComponent implements OnInit {
  clients: any[] = [];
  sites: any[] = [];
  buildings: any[] = [];
  floors: any[] = [];

  selectedClientId: number | null = null;
  selectedSiteId: number | null = null;
  selectedBuildingId: number | null = null;
  selectedFloorId: number | null = null;


  selectedClientName: string = '';
  selectedSiteName: string = '';
  selectedBuildingName: string = '';
  selectedFloorName: string = '';
  showSelectedData: boolean = false;

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.apiService.getAllClients().subscribe(data => {
      this.clients = data.data;
    });
  }

  onClientChange(event: Event): void {
    const target = event.target as HTMLSelectElement;
    const clientId = Number(target.value);
    this.selectedClientId = clientId;
    this.selectedSiteId = null;
    this.selectedBuildingId = null;
    this.selectedFloorId = null;
    this.sites = [];
    this.buildings = [];
    this.floors = [];

    this.apiService.getAllSites(clientId).subscribe(data => {
      this.sites = data.data.filter((site: any) => site.clientId === clientId);
    });
    this.selectedClientName = this.clients.find(client => client.clientId === clientId)?.clientName || '';

  }

  onSiteChange(event: Event): void {
    const target = event.target as HTMLSelectElement;
    const siteId = Number(target.value);
    this.selectedSiteId = siteId;
    this.selectedBuildingId = null;
    this.selectedFloorId = null;
    this.buildings = [];
    this.floors = [];

    this.apiService.getBuildingsBySiteId(siteId).subscribe(data => {
      this.buildings = data.data.filter((building: any) => building.siteId === siteId);
    });
    this.selectedSiteName = this.sites.find(site => site.siteId === siteId)?.siteName || '';

  }

  onBuildingChange(event: Event): void {
    const target = event.target as HTMLSelectElement;
    const buildingId = Number(target.value);
    this.selectedBuildingId = buildingId;
    this.selectedFloorId = null;
    this.floors = [];

    this.apiService.getFloorsByBuildingId(buildingId).subscribe(data => {
      this.floors = data.data.filter((floor: any) => floor.buildingId === buildingId);
    });
    this.selectedBuildingName = this.buildings.find(building => building.buildingId === buildingId)?.buildingName || '';

  }

  onFloorChange(event: Event): void {
    const target = event.target as HTMLSelectElement;
    const floorId = Number(target.value);
    this.selectedFloorId = floorId;

    this.selectedFloorName = this.floors.find(floor => floor.floorId === floorId)?.floorName || '';

  }

  refresh(): void {
    this.selectedClientId = null;
    this.selectedSiteId = null;
    this.selectedBuildingId = null;
    this.selectedFloorId = null;
    this.sites = [];
    this.buildings = [];
    this.floors = [];
  
    // this.showSelectedData = false;
    this.selectedSiteName = " ";
    this.selectedBuildingName = " ";
    this.selectedFloorName = " ";
    this.selectedClientName=" ";
  }
  save(): void {
    this.showSelectedData = true;
  }
}