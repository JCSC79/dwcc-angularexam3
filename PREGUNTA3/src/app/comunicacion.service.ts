import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ComunicacionService {
  // ========== ITEM 1: Propiedad mensaxe de tipo string con BehaviorSubject ==========
  // BehaviorSubject es un Observable que:
  //   - Guarda un valor inicial ('')
  //   - Emite ese valor a nuevos suscriptores
  //   - Permite que se actualice con .next()
  // Parámetros: BehaviorSubject<tipo>(valorInicial)
  private mensaxeSubject = new BehaviorSubject<string>('');
  
  // Propiedad pública que expone el Observable (para que los componentes se suscriban)
  mensaxe$ = this.mensaxeSubject.asObservable();

  constructor() {}

  // Método para actualizar el mensaje (lo usará el emisor)
  actualizarMensaxe(texto: string) {
    this.mensaxeSubject.next(texto);
  }
}
