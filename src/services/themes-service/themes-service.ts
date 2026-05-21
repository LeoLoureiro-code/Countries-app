import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ThemesService {

  theme:string = "light";
  
  changeTheme(){
    if(this.theme === "light"){
      this.theme = "dark";
    }
    else{
      this.theme = "light";
    }

    document.body.className = this.theme;
  }


}
