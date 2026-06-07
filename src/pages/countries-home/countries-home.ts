import { Component, inject, OnInit } from '@angular/core';
import { CountriesCard } from '../../components/countries-card/countries-card';
import { CountriesService } from '../../services/countries-service/countries-service';
import { CountriesFilter } from '../../shared/countries-filter/countries-filter';
import { CountriesForm } from '../../shared/countries-form/countries-form';

@Component({
  selector: 'app-countries-home',
  standalone: true,
  imports: [
    CountriesCard,
    CountriesFilter,
    CountriesForm
  ],
  templateUrl: './countries-home.html',
  styleUrl: './countries-home.css',
})
export class CountriesHome implements OnInit {

  selectedRegion = '';
  searchTerm = '';

  constructor(private countriesService: CountriesService) { }

  allCountries: any[] = [];
  countries: any[] = [];

ngOnInit() {
  this.countriesService.loadCountries().subscribe(data => {
    this.allCountries = data;
    this.countries = data;

  });
}

onSearchCountry(searchTerm: string) {


  this.searchTerm = searchTerm;

  this.applyFilters();
}

onRegionChange(region: string) {

  this.selectedRegion = region;

  this.applyFilters();
}

applyFilters() {


  this.countries = this.allCountries.filter(country => {

    const matchesRegion =
      !this.selectedRegion ||
      country.region === this.selectedRegion;

    const matchesSearch =
      !this.searchTerm ||
      country.name.common
        .toLowerCase()
        .includes(this.searchTerm.toLowerCase());

    return matchesRegion && matchesSearch;
  });

}
}
