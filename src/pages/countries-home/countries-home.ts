import { Component, inject, OnInit } from '@angular/core';
import { CountriesCard } from '../../components/countries-card/countries-card';
import { CountriesService } from '../../services/countries-service/countries-service';

@Component({
  selector: 'app-countries-home',
  imports: [CountriesCard],
  templateUrl: './countries-home.html',
  styleUrl: './countries-home.css',
})
export class CountriesHome implements OnInit{

  constructor(private countriesService:CountriesService){}

  countries:any = [];
 

  ngOnInit() {
     this.countriesService.loadCountries().subscribe(
        data =>{
            this.countries =  data;
        }
     );
  }
  

}
