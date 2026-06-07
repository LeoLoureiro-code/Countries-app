import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { CountriesService } from '../../services/countries-service/countries-service';

@Component({
  selector: 'app-countries-details',
  imports: [RouterLink],
  templateUrl: './countries-details.html',
  styleUrls: ['./countries-details.css'],
})
export class CountriesDetails implements OnInit {

  country: any = null;

  constructor(
    private route: ActivatedRoute,
    private countriesService: CountriesService
  ) {}

  ngOnInit(): void {

    const id = this.route.snapshot.paramMap.get('id');

    if (!id) {
      return;
    }

    this.countriesService.loadSelectedCountry(id)
      .subscribe({
        next: (data: any[]) => {
          this.country = data[0];
        },
        error: (error) => {
          console.error('Error loading country:', error);
        }
      });
  }

  getCurrencyName(): string {

    const currencies = this.country?.currencies;

    if (!currencies) {
      return '';
    }

    const firstKey = Object.keys(currencies)[0];

    return currencies[firstKey]?.name ?? '';
  }

  getLanguages(): string {

    const languages = this.country?.languages;

    if (!languages) {
      return '';
    }

    return Object.values(languages).join(', ');
  }

  getNativeName(): string {

    const nativeNames = this.country?.name?.nativeName;

    if (!nativeNames) {
      return '';
    }

    const firstKey = Object.keys(nativeNames)[0];

    return nativeNames[firstKey]?.common ?? '';
  }
}