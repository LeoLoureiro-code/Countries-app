import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CountriesService {
  
  countries = signal<any[]>([]);

  async loadCountries(){

    const response = await fetch (
      'https://restcountries.com/v3.1/all'
    );

    const data = await response.json();

    this.countries.set(data);


  }
}
