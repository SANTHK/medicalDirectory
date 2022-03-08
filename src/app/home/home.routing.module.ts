import { NgModule } from '@angular/core';
import { Route, RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { PatientDetailsComponent } from './patient-details/patient-details.component';

const routes: Route[] = [
    {
        path: '',
        component: HomeComponent,
        children: [
            {path: '', component: PatientDetailsComponent,}
        ]
    }
  ];
  
  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class HomeRoutingModule { }