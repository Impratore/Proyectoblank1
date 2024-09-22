import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { SesionAdminPageRoutingModule } from './sesionadmin-routing.module';
import { SesionAdminPage } from './sesionadmin.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    SesionAdminPageRoutingModule
  ],
  declarations: [SesionAdminPage]
})
export class SesionAdminPageModule {}
