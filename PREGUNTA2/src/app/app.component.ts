import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule], // ========== IMPORTANTE: Importar FormsModule para usar ngModel ==========
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  // ========== Variable para almacenar el nombre (center of truth) ==========
  // Esta variable es el "núcleo" del two-way binding
  // Cuando cambia el input → se actualiza nombre
  // Cuando cambia el select → se actualiza nombre
  // Cuando cambia nombre → se actualizan ambos y el párrafo
  nombre: string = '';
}
