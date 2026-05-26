import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CountriesService {
  
  countries:any = [];

  async loadCountries(){

    const response = await fetch (
      'https://restcountries.com/v3.1/all?fields=name,flags,region,subregion,population,capital,tld,currencies,languages,borders'
    );

    const data = await response.json();

    this.countries = (data);

    return this.countries;
  }
}
