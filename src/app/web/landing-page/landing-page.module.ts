import { SharedModule } from 'src/app/shared/shared.module';

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { SliderComponent } from '../components/slider/slider.component';
import { WebHeaderComponent } from '../components/web-header/web-header.component';
import { LandingPagePageRoutingModule } from './landing-page-routing.module';
import { LandingPagePage } from './landing-page.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LandingPagePageRoutingModule,
  ],
  declarations: [WebHeaderComponent, LandingPagePage],
})
export class LandingPagePageModule {}
