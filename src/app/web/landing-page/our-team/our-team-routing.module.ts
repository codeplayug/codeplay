import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OurTeamPage } from './our-team.page';

const routes: Routes = [
  {
    path: '',
    component: OurTeamPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OurTeamPageRoutingModule {}
