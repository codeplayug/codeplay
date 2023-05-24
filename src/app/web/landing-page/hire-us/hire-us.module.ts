import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { ComponentsModule } from '../../components/components.module';
import { PlaceholderComponent } from '../../components/placeholder/placeholder.component';
import { HireUsPageRoutingModule } from './hire-us-routing.module';
import { HireUsPage } from './hire-us.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HireUsPageRoutingModule,
    PlaceholderComponent,
  ],
  declarations: [HireUsPage],
})
export class HireUsPageModule {}
