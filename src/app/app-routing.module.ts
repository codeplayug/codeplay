import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

import { ComponentsModule } from './web/components/components.module';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./web/landing-page/landing-page.module').then(
        (m) => m.LandingPagePageModule
      ),
  },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
    ComponentsModule,
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
