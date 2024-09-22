import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SesionAdminPage } from './sesionadmin.page';

const routes: Routes = [
  {
    path: '',
    component: SesionAdminPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SesionAdminPageRoutingModule {}
