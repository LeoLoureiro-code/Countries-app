import { Routes } from '@angular/router';
import { CountriesHome } from '../pages/countries-home/countries-home';

export const routes: Routes = [
    {path: '', redirectTo:'home', pathMatch: 'full'},
    {path: 'home', component: CountriesHome}
];
