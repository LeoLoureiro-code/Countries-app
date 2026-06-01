import { Component } from '@angular/core';
import { ThemesService } from '../../services/themes-service/themes-service';

@Component({
  selector: 'app-countries-header',
  imports: [],
  templateUrl: './countries-header.html',
  styleUrl: './countries-header.css',
})
export class CountriesHeader {


  constructor(private themeService:ThemesService){}

  toggleTheme(){
    this.themeService.changeTheme();
  }

  get Theme(){
    return this.themeService.theme;
  }


}
