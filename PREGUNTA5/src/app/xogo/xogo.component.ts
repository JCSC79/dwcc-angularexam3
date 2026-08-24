import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-xogo',
  standalone: true,
  imports: [],
  templateUrl: './xogo.component.html',
  styleUrl: './xogo.component.css'
})
export class XogoComponent {
  posX: number = 180; // Posición inicial en X (recoméndase usar o atributo style.left.px no HTML)
  posY: number = 180; // Posición inicial en Y (recoméndase usar o atributo style.left.px no HTML)
}