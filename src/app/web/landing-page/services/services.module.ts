import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { PlaceholderComponent } from '../../components/placeholder/placeholder.component';
import { ServicesPageRoutingModule } from './services-routing.module';
import { ServicesPage } from './services.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ServicesPageRoutingModule,
    PlaceholderComponent,
  ],
  declarations: [ServicesPage],
})
export class ServicesPageModule {}
