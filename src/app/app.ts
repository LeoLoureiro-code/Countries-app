import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CountriesHeader } from "../shared/countries-header/countries-header";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CountriesHeader],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Countries-app');
}
