import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-xogo',
  standalone: true,
  imports: [],
  templateUrl: './xogo.component.html',
  styleUrl: './xogo.component.css'
})
export class XogoComponent implements OnInit {
  // ========== ITEM 1: Posición inicial en el centro del tablero ==========
  // Tablero: 400x400 px
  // Personaje: 40x40 px
  // Centro: (400-40)/2 = 180, 180
  // Esto coloca el personaje en el centro del tablero
  posX: number = 180;
  posY: number = 180;
  
  // ========== ITEM 2c: Límites del tablero ==========
  // El contenedor tiene 400x400 px
  // El personaje tiene 40x40 px
  // Límites válidos:
  //   - X: 0 a 360 (400 - 40)
  //   - Y: 0 a 360 (400 - 40)
  private limiteX = 400 - 40;  // 360
  private limiteY = 400 - 40;  // 360
  private limiteMinimo = 0;
  
  // ========== ITEM 2a: Paso de movimiento ==========
  // Cada acción mueve el personaje 10 píxeles
  private pasoMovimiento = 10;

  ngOnInit() {
    // Hacer que el componente tenga focus para escuchar eventos del teclado
    // window.addEventListener('keydown', ...) escucharía en toda la ventana
  }

  // ========== ITEM 2b: Event listener para las flechas del teclado ==========
  // @HostListener: Decorador que escucha eventos en el componente
  // 'window:keydown': Escucha el evento keydown en toda la ventana
  // $event: Evento del teclado que contiene información de la tecla presionada
  // 'keydown.arrowUp', 'keydown.arrowDown', etc: Sintaxis alternativa (más específica)
  @HostListener('window:keydown', ['$event'])
  manejarEventoTeclado(event: KeyboardEvent) {
    // ========== ITEM 2b: Detectar qué tecla se presionó ==========
    // event.key retorna el nombre de la tecla: 'ArrowUp', 'ArrowDown', etc.
    switch(event.key) {
      // Flecha arriba: disminuir Y (hacia arriba es -Y)
      case 'ArrowUp':
        this.mover(0, -this.pasoMovimiento);
        event.preventDefault(); // Evitar que la página se desplace
        break;
        
      // Flecha abajo: aumentar Y
      case 'ArrowDown':
        this.mover(0, this.pasoMovimiento);
        event.preventDefault();
        break;
        
      // Flecha izquierda: disminuir X (hacia la izquierda es -X)
      case 'ArrowLeft':
        this.mover(-this.pasoMovimiento, 0);
        event.preventDefault();
        break;
        
      // Flecha derecha: aumentar X
      case 'ArrowRight':
        this.mover(this.pasoMovimiento, 0);
        event.preventDefault();
        break;
    }
  }

  // ========== ITEM 2a: Método para mover la personaje ==========
  // Parámetros:
  //   - deltaX: cambio en X (positivo = derecha, negativo = izquierda)
  //   - deltaY: cambio en Y (positivo = abajo, negativo = arriba)
  // Qué hace:
  //   1. Calcula la nueva posición
  //   2. Valida que esté dentro de los límites
  //   3. Actualiza posX y posY
  private mover(deltaX: number, deltaY: number) {
    // Calcular nueva posición
    let nuevaX = this.posX + deltaX;
    let nuevaY = this.posY + deltaY;
    
    // ========== ITEM 2c: Validar límites del tablero ==========
    // Si la nueva posición está fuera de los límites, no hace nada
    // Math.max(0, ...) asegura que no sea menor que 0
    // Math.min(..., limite) asegura que no sea mayor que el límite
    if (nuevaX < this.limiteMinimo) nuevaX = this.limiteMinimo;
    if (nuevaX > this.limiteX) nuevaX = this.limiteX;
    
    if (nuevaY < this.limiteMinimo) nuevaY = this.limiteMinimo;
    if (nuevaY > this.limiteY) nuevaY = this.limiteY;
    
    // Actualizar la posición si está válida
    this.posX = nuevaX;
    this.posY = nuevaY;
  }
}