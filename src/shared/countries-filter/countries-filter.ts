import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-countries-filter',
  standalone: true,
  templateUrl: './countries-filter.html',
  styleUrl: './countries-filter.css',
})
export class CountriesFilter {

  @Output()
  regionSelected = new EventEmitter<string>();

  onRegionChange(event: Event) {
    const region = (event.target as HTMLSelectElement).value;
    this.regionSelected.emit(region);
  }
}