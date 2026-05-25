import { Component, inject } from '@angular/core';
import { CountriesService } from '../../services/countries-service/countries-service';

@Component({
  selector: 'app-countries-home',
  imports: [],
  templateUrl: './countries-home.html',
  styleUrl: './countries-home.css',
})
export class CountriesHome {

  countriesService = inject(CountriesService);

}
