import { Routes } from '@angular/router';
import { DoctorsPageComponent } from './pages/doctors-page/doctors-page';

export const routes: Routes = [
  { path: 'doctors', component: DoctorsPageComponent },
  { path: '', component: DoctorsPageComponent }, // route racine  
  { path: '**', redirectTo: '' }, 

];


