import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-registro',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './registro.component.html',
  styleUrl: './registro.component.css'
})
export class RegistroComponent {

  userEmail: string = '';
  userPassword: string = '';
  emailInvalid: boolean = false;
  passwordInvalid: boolean = false;

  onSubmit() {
    // Validar el correo electrónico y la contraseña
    if (this.validateEmail(this.userEmail) && this.validatePassword(this.userPassword)) {
      // Ambos son válidos, puedes realizar otras acciones aquí
      console.log('Correo y contraseña válidos. Realizar acciones de registro.');
    } else {
      // Al menos uno de ellos no es válido
      if (!this.validateEmail(this.userEmail)) {
        this.emailInvalid = true;
      }

      if (!this.validatePassword(this.userPassword)) {
        this.passwordInvalid = true;
      }
    }
  }

  // Función para validar el correo electrónico
  validateEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  // Función para validar la contraseña
  validatePassword(password: string): boolean {
    // Verificar longitud mínima
    if (password.length < 5) {
      return false;
    }

    // Verificar presencia de letras mayúsculas, minúsculas y números
    const hasUpperCase = /[A-Z]/.test(password);
    const hasLowerCase = /[a-z]/.test(password);
    const hasNumber = /\d/.test(password);

    return hasUpperCase && hasLowerCase && hasNumber;
  }
}

