import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { ComponentsModule } from '../../components/components.module';
import { PlaceholderComponent } from '../../components/placeholder/placeholder.component';
import { AboutUsPageRoutingModule } from './about-us-routing.module';
import { AboutUsPage } from './about-us.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AboutUsPageRoutingModule,
    ComponentsModule,
    PlaceholderComponent,
  ],
  declarations: [AboutUsPage],
})
export class AboutUsPageModule {}
