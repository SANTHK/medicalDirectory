import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from "rxjs";
import { environment } from 'src/environments/environment';
import { PatientsAPI } from 'src/models/patients-api.model';
import { PatientDetails } from "src/models/pateint-details.model";

@Injectable({
    providedIn: 'root',
  })
  export class PateintsService {
    constructor(private httpClient: HttpClient) {}
    getPatients = (): Observable<PatientsAPI[]> => {
      return this.httpClient.get<PatientsAPI[]>(`${environment.apiUrl}patients`);
    };
    getPatientById = (patientId): Observable<PatientDetails> => {
      return this.httpClient.get<PatientDetails>(`${environment.apiUrl}patients/${patientId}`);
    };
  }