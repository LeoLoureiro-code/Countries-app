import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ThemesService {

  theme:string = "Light";
  
  changeTheme(){
    this.theme === "Light"? this.theme = "Dark": this.theme = "Light";

    document.body.className = this.theme;
  }


}
