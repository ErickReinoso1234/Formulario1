import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  
  nombre: string = '';
  apellido: string = '';
  cedula: number = 0; // Inicializado a null
  correo: string = '';
  telefono: number = 0; // Inicializado a null

  messages1: any[] = []; // Para manejar los mensajes de error

  submitForm() {
    if (!this.nombre || !this.apellido || !this.cedula || !this.correo || !this.telefono) {
      this.messages1 = [{severity:'error', summary:'Error', detail:'No se pudo enviar el formulario. Por favor, llena todos los campos.'}];
      return; // No enviar el formulario si hay campos vacíos
    }

    // Aquí colocas la lógica para enviar el formulario
    console.log('Formulario enviado');
    console.log('Nombre:', this.nombre);
    console.log('Apellido:', this.apellido);
    console.log('Cedula:', this.cedula);
    console.log('Correo:', this.correo);
    console.log('Telefono:', this.telefono);

    // Restablecer los valores de los campos del formulario
    this.nombre = '';
    this.apellido = '';
    this.cedula = 0;
    this.correo = '';
    this.telefono = 0;
    
    // Limpiar los mensajes de error
    this.messages1 = [];
  }
}
