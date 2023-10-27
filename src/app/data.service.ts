import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  dataSource:any;
  apiUrl='https://restcountries.com/v3.1/';

  constructor(private http:HttpClient) { }

  getAllCountries(){
    return this.http.get(this.apiUrl +'all' )
    
  }
  getSearchByName(name:string){
    return this.http.get(this.apiUrl +'name/' +name )
  }
  
  
  

}
