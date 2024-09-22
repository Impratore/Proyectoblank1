import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {
  datosUsuario: any = null;

  constructor() { }

  ngOnInit() {
    // Recuperar los datos del almacenamiento local
    const usuarioData = localStorage.getItem('usuario');
    if (usuarioData) {
      this.datosUsuario = JSON.parse(usuarioData);
    }
  }
}
