import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LandingPagePage } from './landing-page.page';

const routes: Routes = [
  {
    path: '',
    component: LandingPagePage,
    children: [
      {
        path: 'home',
        loadChildren: () =>
          import('./home/home.module').then((m) => m.HomePageModule),
      },
      {
        path: 'join-us',
        loadChildren: () =>
          import('./join-us/join-us.module').then((m) => m.JoinUsPageModule),
      },
      {
        path: 'services',
        loadChildren: () =>
          import('./services/services.module').then(
            (m) => m.ServicesPageModule
          ),
      },
      {
        path: 'about-us',
        loadChildren: () =>
          import('./about-us/about-us.module').then((m) => m.AboutUsPageModule),
      },
      {
        path: 'our-team',
        loadChildren: () =>
          import('./our-team/our-team.module').then((m) => m.OurTeamPageModule),
      },
      {
        path: 'hire-us',
        loadChildren: () =>
          import('./hire-us/hire-us.module').then((m) => m.HireUsPageModule),
      },
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'home',
      },
    ],
  },

  //   path: 'home',
  //   loadChildren: () =>
  //     import('./home/home.module').then((m) => m.HomePageModule),
  // },
  // {
  //   path: 'join-us',
  //   loadChildren: () =>
  //     import('./join-us/join-us.module').then((m) => m.JoinUsPageModule),
  // },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LandingPagePageRoutingModule {}
