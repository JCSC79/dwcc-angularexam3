import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComunicacionService } from '../comunicacion.service';

@Component({
  selector: 'app-receptor',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './receptor.component.html',
  styleUrl: './receptor.component.css'
})
export class ReceptorComponent implements OnInit {
  // Variable para almacenar el mensaje recibido
  mensaxe: string = '';

  // ========== ITEM 3: Inyectar el servicio ==========
  // Parámetro: private comunicacionService: ComunicacionService
  constructor(private comunicacionService: ComunicacionService) {}

  // ========== ITEM 3: Suscribirse al servicio cuando se inicia el componente ==========
  // ngOnInit es un ciclo de vida que se ejecuta cuando el componente se crea
  // Parámetros: ninguno (es un ciclo de vida de Angular)
  // Qué hace:
  //   1. Se suscribe al Observable mensaxe$ del servicio
  //   2. Recibe los cambios cada vez que se emite un nuevo valor
  //   3. Actualiza la variable mensaxe
  ngOnInit() {
    this.comunicacionService.mensaxe$.subscribe((nuevoMensaje: string) => {
      this.mensaxe = nuevoMensaje;
    });
  }
}
