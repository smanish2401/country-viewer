import { Component } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  isLoading:boolean=false
  constructor(private data:DataService, route:Router) {}

  ngOnInit(): void{
   this.onFetchdata()
    
      
    }
onFetchdata() {
  this.data.getAllCountries().subscribe((res)=>{
    console.log(res)
  })
  
}

  


}
