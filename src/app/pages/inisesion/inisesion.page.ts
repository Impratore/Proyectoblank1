import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-inisesion',
  templateUrl: './inisesion.page.html',
  styleUrls: ['./inisesion.page.scss'],
})
export class InisesionPage implements OnInit {

  formularioIniciarSesion!: FormGroup;


  foto = {
    imagen: 'assets/img/Logo1.png'
  }

  constructor(private fb: FormBuilder) { }

  // Inicializando el formulario con validaciones
  ngOnInit() {
    this.formularioIniciarSesion = this.fb.group({
      correo: ['', [Validators.required, Validators.email]],
      contrasena: ['', [
        Validators.required, 
        Validators.minLength(8),
        Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*]).{8,}$') // Minúsculas, mayúsculas, números, símbolos
      ]]
    });
  }

  // Método para verificar si un campo es inválido y si el usuario lo ha tocado
  esCampoInvalido(campo: string): boolean {
    const control = this.formularioIniciarSesion.get(campo);
    return !!(control && control.invalid && control.touched);
  }
  

  // Método para iniciar sesión cuando el usuario presione el botón  'Iniciar Sesión'
  iniciarSesion() {
    if (this.formularioIniciarSesion.valid) {
      console.log('Formulario válido');
    } else {
      this.formularioIniciarSesion.markAllAsTouched();
    }
  }
}
