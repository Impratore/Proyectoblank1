import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastController } from '@ionic/angular'; // Importar el ToastController este es para el mensajito de si se realizo correctamente

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.page.html',
  styleUrls: ['./formulario.page.scss'],
})
export class FormularioPage implements OnInit {

  formularioRegistro: FormGroup;

  foto = {
    imagen: 'assets/img/Logo1.png'
  }

  // Crear el formulario de registro
  constructor(private formBuilder: FormBuilder, private toastController: ToastController) {
    this.formularioRegistro = this.formBuilder.group({
      nombreUsuario: ['', [
        Validators.required, 
        Validators.minLength(6), 
        Validators.maxLength(13), 
        Validators.pattern('^[A-Z][a-zA-Z]+$') // Debe empezar con mayúscula y solo letras
      ]],
      contrasena: ['', [
        Validators.required, 
        Validators.minLength(8), 
        Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,}$') // Al menos una minúscula, mayúscula, número, y símbolo
      ]],
      correo: ['', [
        Validators.required, 
        Validators.email
      ]],
      numeroTelefonico: ['', [
        Validators.required, 
        Validators.pattern('^[0-9]{3}-[0-9]{3}-[0-9]{3}$') // 123-456-789
      ]]
    });
  }

  ngOnInit() { }

  // Mostrar mensaje de éxito al crear la cuenta
  async presentToast() {
    const toast = await this.toastController.create({
      message: '¡Cuenta creada exitosamente!',
      duration: 2000,
      position: 'top',
      color: 'success'
    });
    toast.present();
  }

  // Formatear el número telefónico
  formatearNumeroTelefonico(event: any) {
    let valor = event.target.value.replace(/\D/g, ''); // Eliminar caracteres no numéricos
    if (valor.length > 3) {
      valor = valor.substring(0, 3) + '-' + valor.substring(3);
    }
    if (valor.length > 7) {
      valor = valor.substring(0, 7) + '-' + valor.substring(7, 10);
    }
    this.formularioRegistro.get('numeroTelefonico')?.setValue(valor, { emitEvent: false });
  }

  // Validar y mostrar los errores de cada campo en el formulario
  esCampoInvalido(campo: string): boolean {
    const control = this.formularioRegistro.get(campo);
    return control ? control.invalid && control.touched : false;
  }

  // Validar y crear la cuenta al presionar el botón "Crear Cuenta"
  crearCuenta() {
    if (this.formularioRegistro.valid) {
      const datosUsuario = this.formularioRegistro.value;
      
      // Almacenar los datos en el almacenamiento local
      localStorage.setItem('usuario', JSON.stringify(datosUsuario));
  
      console.log('Formulario válido', datosUsuario);
      this.presentToast(); // Mostrar mensaje de éxito
    } else {
      console.log('Formulario no válido');
      this.formularioRegistro.markAllAsTouched();
    }
  }
  
}
