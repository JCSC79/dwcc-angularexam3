import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ComunicacionService } from '../comunicacion.service';

@Component({
  selector: 'app-emisor',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './emisor.component.html',
  styleUrl: './emisor.component.css'
})
export class EmisorComponent {
  // Variable para almacenar el texto del input (two-way binding)
  textoInput: string = '';

  // ========== ITEM 2a: Inyectar el servicio ComunicacionService ==========
  // Parámetro: private comunicacionService: ComunicacionService
  // Esto permite acceder al servicio desde el componente
  constructor(private comunicacionService: ComunicacionService) {}

  // ========== ITEM 2b: Método enviar que modifica mensaxe en el servicio ==========
  // Se ejecuta al hacer clic en el botón "Enviar"
  // Llama a actualizarMensaxe() del servicio, que emite el valor a todos los suscriptores
  enviar() {
    this.comunicacionService.actualizarMensaxe(this.textoInput);
    // Opcional: limpiar el input después de enviar
    this.textoInput = '';
  }
}
