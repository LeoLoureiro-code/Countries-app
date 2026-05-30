import { Component, Input } from '@angular/core';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-countries-card',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './countries-card.html',
  styleUrl: './countries-card.css',
})
export class CountriesCard {
  @Input()
  country:any;

}
