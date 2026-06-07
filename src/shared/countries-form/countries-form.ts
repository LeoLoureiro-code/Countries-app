import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-countries-form',
  standalone: true,
  imports: [],
  templateUrl: './countries-form.html',
  styleUrls: ['./countries-form.css'],
})
export class CountriesForm {
 
 @Output()
searchChanged = new EventEmitter<any>();

onSearchCountry(event: Event) {

  const searchTerm = (
    event.target as HTMLInputElement
  ).value;

this.searchChanged.emit(searchTerm);
}
}
