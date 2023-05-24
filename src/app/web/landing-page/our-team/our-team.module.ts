import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { PlaceholderComponent } from '../../components/placeholder/placeholder.component';
import { OurTeamPageRoutingModule } from './our-team-routing.module';
import { OurTeamPage } from './our-team.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OurTeamPageRoutingModule,
    PlaceholderComponent,
  ],
  declarations: [OurTeamPage],
})
export class OurTeamPageModule {}
