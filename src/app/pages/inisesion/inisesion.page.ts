import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inisesion',
  templateUrl: './inisesion.page.html',
  styleUrls: ['./inisesion.page.scss'],
})
export class InisesionPage implements OnInit {

  foto = {
    imagen: 'assets/img/fotoperfil.png'
  }

  constructor() { }

  ngOnInit() {
  }

}
