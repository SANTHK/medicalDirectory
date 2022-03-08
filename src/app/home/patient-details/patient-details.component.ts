import { Component, OnInit } from '@angular/core';
import { PateintsService } from 'src/app/services/patients.service';
import { PatientDetails } from 'src/models/pateint-details.model';
import { PatientsAPI } from 'src/models/patients-api.model';

@Component({
  selector: 'app-patient-details',
  templateUrl: './patient-details.component.html',
  styleUrls: ['./patient-details.component.css']
})
export class PatientDetailsComponent implements OnInit {

  patients: PatientsAPI[];
  pateintDetails: PatientDetails;
  searchText: string;

  constructor(private patientsService: PateintsService) { }

  ngOnInit(): void {
    this.getPatients();
  }

  getPatients() {
    this.patientsService.getPatients().subscribe((result) => {
      this.patients = result;
    });
  }

  getPatientById(id:number){
    this.patientsService.getPatientById(id).subscribe((result) =>{
      this.pateintDetails = result;
    })
  }
}
