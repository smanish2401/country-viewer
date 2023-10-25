import { Component } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  isLoading:boolean=false;
  dataSource:any=[];
  error:any;
  
  constructor(private data:DataService, route:Router) {}

  ngOnInit(): void{
   this.onFetchdata()
    
      
    }
onFetchdata() {
  this.isLoading=true
  this.data.getAllCountries().subscribe((result)=>{
    console.log(result);
    if(result){
      this.dataSource=result;
      this.data.dataSource=this.dataSource;
      
      setTimeout(() => {
        this.isLoading=false
      }, 2000);
    }
    else{
      this.error="Error 404 ! Try again after some time"
      
    }
    
  })
  
}

  


}
