import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';  // Importa ReactiveFormsModule
import { IonicModule } from '@ionic/angular';

import { InisesionPageRoutingModule } from './inisesion-routing.module';
import { InisesionPage } from './inisesion.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,  // Asegúrate de que ReactiveFormsModule esté aquí
    IonicModule,
    InisesionPageRoutingModule
  ],
  declarations: [InisesionPage]
})
export class InisesionPageModule {}
