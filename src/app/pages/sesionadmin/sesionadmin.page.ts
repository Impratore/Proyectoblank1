import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-sesionadmin',
  templateUrl: './sesionadmin.page.html',
  styleUrls: ['./sesionadmin.page.scss'],
})
export class SesionAdminPage implements OnInit {

  formularioSesionAdmin!: FormGroup;

  // Datos de administrador predefinidos
  private administrador = {
    correo: 'admin@correo.com',
    contrasena: 'Admin123!'
  };

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private toastController: ToastController
  ) { }

  ngOnInit() {
    // Definir formulario con validaciones
    this.formularioSesionAdmin = this.fb.group({
      correo: ['', [Validators.required, Validators.email]],
      contrasena: ['', [
        Validators.required,
        Validators.minLength(8),
        Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*]).{8,}$') // Patrón para mayúsculas, minúsculas, números y símbolos
      ]]
    });
  }

  // Verifica si un campo es inválido y ha sido tocado
  esCampoInvalido(campo: string): boolean {
    const control = this.formularioSesionAdmin.get(campo);
    return !!(control && control.invalid && control.touched);
  }

  // Mostrar mensajes de error
  async mostrarError(mensaje: string) {
    const toast = await this.toastController.create({
      message: mensaje,
      duration: 2000,
      color: 'danger',
      position: 'top'
    });
    await toast.present();
  }

  // Método para iniciar sesión
  iniciarSesion() {
    const { correo, contrasena } = this.formularioSesionAdmin.value;
    if (correo === this.administrador.correo && contrasena === this.administrador.contrasena) {
      // Redirigir a la página de administración
      this.router.navigate(['/administracion']);
    } else {
      this.mostrarError('Credenciales incorrectas');
    }
  }
}
