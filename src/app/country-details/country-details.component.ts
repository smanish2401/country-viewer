import { Component } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-country-details',
  templateUrl: './country-details.component.html',
  styleUrls: ['./country-details.component.css']
})
export class CountryDetailsComponent {

  dataSource: any = [];
  isLoading: boolean = true;

  constructor(private data: DataService) { }
  ngOnInit(): void {
    this.isLoading = true
    this.dataSource = this.data.dataSource
    console.warn(this.dataSource)
    setTimeout(() => {
      this.isLoading=false
    }, 1000);
  }

}
