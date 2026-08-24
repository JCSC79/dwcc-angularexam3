import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  // ========== ITEM 5: Variable acceso para bindear con el checkbox ==========
  // Esta variable controla si está marcado el checkbox
  // Cuando cambia aquí, cambia el checkbox
  // Cuando cambia el checkbox, cambia aquí
  acceso: boolean = false;

  // ========== ITEM 2 + 3: Inyectar Router para navegar entre rutas ==========
  // private router: Router permite usar this.router.navigate()
  constructor(private router: Router) {}

  // ========== ITEM 5: Método para actualizar el checkbox y guardar en sessionStorage ==========
  // Se ejecuta cada vez que el usuario hace click en el checkbox
  // Parámetro: $event contiene el evento del checkbox
  // Qué hace:
  //   1. this.acceso se actualiza automáticamente (two-way binding)
  //   2. Guarda el valor en sessionStorage bajo la clave "acceso"
  //   3. El guard leerá este valor para permitir/denegar acceso a /privado
  actualizarAcceso() {
    sessionStorage.setItem('acceso', this.acceso.toString());
  }

  // ========== ITEM 2: Método para navegar a la ruta pública ==========
  // Se ejecuta al hacer click en el botón "PÚBLICO"
  // this.router.navigate(['/publico']) navega a la ruta /publico
  // Esta ruta NO tiene guard, así que siempre se puede acceder
  irAPublico() {
    this.router.navigate(['/publico']);
  }

  // ========== ITEM 3: Método para navegar a la ruta privada ==========
  // Se ejecuta al hacer click en el botón "PRIVADO"
  // this.router.navigate(['/privado']) intenta navegar a la ruta /privado
  // El guard control-acceso interceptá la navegación y verifica:
  //   - Si acceso === true en sessionStorage → permite la navegación
  //   - Si acceso === false en sessionStorage → rechaza la navegación
  irAPrivado() {
    this.router.navigate(['/privado']);
  }
}