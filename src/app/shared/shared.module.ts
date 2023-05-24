import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';

import { ButtonNavigationComponent } from './button-navigation/button-navigation.component';
import { InputComponent } from './input/input.component';
import { SharedButtonComponent } from './shared-button/shared-button.component';

@NgModule({
  declarations: [
    InputComponent,
    SharedButtonComponent,
    ButtonNavigationComponent,
  ],
  imports: [CommonModule, IonicModule],

  exports: [InputComponent, SharedButtonComponent, ButtonNavigationComponent],
})
export class SharedModule {}
