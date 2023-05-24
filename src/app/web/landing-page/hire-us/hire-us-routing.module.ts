import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HireUsPage } from './hire-us.page';

const routes: Routes = [
  {
    path: '',
    component: HireUsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HireUsPageRoutingModule {}
