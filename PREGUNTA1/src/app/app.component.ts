import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  // ========== PUNTO 1: @ViewChild para referenciar elemento HTML (0,1 punto) ==========
  // @ViewChild('bolaBotando') accede al elemento HTML que tenga #bolaBotando
  // ElementRef proporciona acceso al DOM nativo a través de .nativeElement
  // Usamos ViewChild porque necesitamos manipular propiedades CSS desde TypeScript
  @ViewChild('bolaBotando') bolaBotando!: ElementRef;

  // Variable para guardar la duración actual de la animación (en segundos)
  // La inicializamos con un valor por defecto que deberá coincidir con el CSS
  duracionAnimacion: number = 1; // Duración inicial de la animación (coincide con CSS)

  ngAfterViewInit(): void {
    // ngAfterViewInit es el ciclo de vida correcto para usar ViewChild
    // En ngOnInit aún no está disponible, por eso lo hacemos aquí
    this.actualizarAnimacion();
  }

  // ========== PUNTOS 2a y 2b: Métodos para acelerar y decelerar ==========
  
  // PUNTO 2a: ACELERAR - disminuye tiempo de animación 10% (0,5 puntos)
  // Lógica: si duracionAnimacion = 2s, y disminuimos 10%
  // Nueva duración = 2 - (2 * 0.10) = 2 - 0.2 = 1.8s
  acelerar(): void {
    this.duracionAnimacion = this.duracionAnimacion * 0.9; // Reduce 10%
    this.actualizarAnimacion();
  }

  // PUNTO 2b: DECELERAR - aumenta tiempo de animación 10% (0,5 puntos)
  // Lógica: si duracionAnimacion = 2s, y aumentamos 10%
  // Nueva duración = 2 + (2 * 0.10) = 2 + 0.2 = 2.2s
  decelerar(): void {
    this.duracionAnimacion = this.duracionAnimacion * 1.1; // Aumenta 10%
    this.actualizarAnimacion();
  }

  // Método auxiliar para actualizar la duración en el DOM
  // Accedemos al elemento HTML mediante this.bolaBotando.nativeElement
  // y modificamos la propiedad CSS style.animationDuration
  actualizarAnimacion(): void {
    if (this.bolaBotando) {
      this.bolaBotando.nativeElement.style.animationDuration = `${this.duracionAnimacion}s`;
    }
  }
}
