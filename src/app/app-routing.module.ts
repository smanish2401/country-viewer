import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { count } from 'rxjs';
import { CountryDetailsComponent } from './country-details/country-details.component';

const routes: Routes = [
  {
    path:'country/:name',
    component:CountryDetailsComponent,
   
  },
  {
    path:'**',
    component:HomeComponent,
    
  }
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
