import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {

  Usuario1: any = {
    nombre: 'Patricio',
    apellido: 'Rodriguez',
    edad: 24
  }

  Usuario2: any = {
    nombre: 'Enrique',
    apellido: 'Alarcon',
    edad: 22
  }

  constructor() { }

  ngOnInit() {
  }

}
