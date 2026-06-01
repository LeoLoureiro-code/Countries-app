import { Routes } from '@angular/router';
import { CountriesHome } from '../pages/countries-home/countries-home';
import { CountriesDetails } from '../pages/countries-details/countries-details';
import {CountriesNotFound} from '../pages/countries-not-found/countries-not-found'

export const routes: Routes = [
    {path: '', redirectTo:'home', pathMatch: 'full'},
    {path: 'home', component: CountriesHome},
    {path: 'details/:id', component: CountriesDetails},
    {path: '**', component: CountriesNotFound},
];
