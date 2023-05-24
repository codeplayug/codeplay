import { Flavors, Themes } from 'src/theme/themes';

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private currentTheme: Flavors = Flavors.COSMIC_ADVENTURE;

  private lightTheme: Flavors = Flavors.TROPICAL_OASIS;
  private darkTheme: Flavors = Flavors.COSMIC_ADVENTURE;

  constructor() {}

  getThemeColors() {
    return this.currentTheme;
  }

  toggleTheme() {
    if (this.currentTheme === this.lightTheme) {
      this.currentTheme = this.darkTheme;
    } else {
      this.currentTheme = this.lightTheme;
    }
  }
}
