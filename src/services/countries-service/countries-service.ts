import { Injectable, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class CountriesService {
  
  countries:any = [];

  constructor(private httpClient:HttpClient){}

  loadCountries(){

    return this.httpClient.get('https://restcountries.com/v3.1/all?fields=name,flags,region,subregion,population,capital,tld,currencies,languages,borders');
  
  } 
}
