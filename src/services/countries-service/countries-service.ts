import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CountriesService {

  constructor(private httpClient: HttpClient) {}

  loadCountries(): Observable<any[]> {
    return this.httpClient.get<any[]>(
      'https://restcountries.com/v3.1/all?fields=name,flags,region,subregion,population,capital,cca3'
    );
  }

  loadSelectedCountry(code: string): Observable<any[]> {
    return this.httpClient.get<any[]>(
      `https://restcountries.com/v3.1/alpha/${code}`
    );
  }
}