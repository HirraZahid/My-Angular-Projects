import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ReservationService } from '../reservation/reservation.service';
import { ReservationModule } from '../reservation/reservation.module';
import { Reservation } from '../models/reservation';
import { Router,ActivatedRoute } from '@angular/router';
import { HomeComponent } from '../home/home.component';


@Component({
  selector: 'app-reservation-form',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule,HomeComponent],
  templateUrl: './reservation-form.component.html',
  styleUrls: ['./reservation-form.component.scss'] // Corrected property name
})
export class ReservationFormComponent {
  reservationForm: FormGroup = new FormGroup({});

  constructor(private formBuilder: FormBuilder,private ReservationService:ReservationService,private router:Router,private activatedRoute:ActivatedRoute) {}

  ngOnInit(): void {
    // Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    // Add 'implements OnInit' to the class.
    this.reservationForm = this.formBuilder.group({
      checkInDate: ['', Validators.required], // Changed to camelCase
      checkOutDate: ['', Validators.required], // Changed to camelCase
      guestName: ['', Validators.required],
      guestEmail: ['', [Validators.required, Validators.email]],
      roomNumber: ['', Validators.required]
    });
    let id=this.activatedRoute.snapshot.paramMap.get('id');
    if(id){
      let reservation=this.ReservationService.getbyreservationid(id);
      if(reservation){
        this.reservationForm.patchValue(reservation);
      }

    }
  }

  onsubmit(): void {
    if (this.reservationForm.valid) {
      let reservation:Reservation = this.reservationForm.value;
      let id=this.activatedRoute.snapshot.paramMap.get('id');
    if(id){
      this.ReservationService.updatereservation(id,reservation)
      }
      else{

      this.ReservationService.addreservation(reservation);}

      this.router.navigate(['/list']);

    }
  }
  
}
