# 📋 PREGUNTA 3 - Comunicación entre Componentes con Servicios y Observables (2 puntos)

## 🎯 Objetivo
Implementar un patrón de comunicación entre dos componentes (`emisor` y `receptor`) usando un **servicio compartido** con **Observables** (RxJS). El emisor envía mensajes y el receptor los recibe automáticamente sin acoplamiento directo.

---

## ✅ Items Puntables (2 puntos totales)

### **ITEM 1: Servicio con propiedad mensaxe (0,5 puntos)**

```typescript
// comunicacion.service.ts
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ComunicacionService {
  // BehaviorSubject: Observable que guarda un valor y lo emite a nuevos suscriptores
  private mensaxeSubject = new BehaviorSubject<string>('');
  
  // Exponemos como Observable (solo lectura desde componentes)
  mensaxe$ = this.mensaxeSubject.asObservable();
  
  // Método para actualizar desde el emisor
  actualizarMensaxe(texto: string) {
    this.mensaxeSubject.next(texto); // .next() emite el nuevo valor
  }
}
```

**¿Qué sucede?**
- `BehaviorSubject<string>('')` crea un Observable con valor inicial ""
- `.asObservable()` lo convierte en Observable de solo lectura
- `.next(texto)` emite un nuevo valor a todos los suscriptores

**Parámetros:**
- `<string>`: Tipo genérico (el tipo de dato que emitirá)
- `('')`: Valor inicial del Observable

---

### **ITEM 2a + 2b: Componente Emisor (0,5 puntos)**

#### 2a: Inyectar servicio (0,25 puntos)
```typescript
// emisor.component.ts
import { ComunicacionService } from '../comunicacion.service';

@Component({...})
export class EmisorComponent {
  textoInput: string = '';
  
  // Inyectar el servicio en el constructor
  constructor(private comunicacionService: ComunicacionService) {}
  
  enviar() {
    this.comunicacionService.actualizarMensaxe(this.textoInput);
    this.textoInput = '';
  }
}
```

**¿Qué es la inyección de dependencias?**
- `private comunicacionService: ComunicacionService` le dice a Angular:
  - "Dame una instancia del servicio ComunicacionService"
  - "Guárdalo en la propiedad `comunicacionService`"
  - "Hazlo disponible en todo el componente"

#### 2b: Botón que envía (0,25 puntos)
```html
<!-- emisor.component.html -->
<input type="text" [(ngModel)]="textoInput" placeholder="Escribe un mensaje">
<button (click)="enviar()">Enviar</button>
```

**¿Qué sucede?**
- Usuario escribe "Hola" en el input
- `[(ngModel)]` sincroniza con `textoInput`
- Click en botón → `(click)="enviar()"` se ejecuta
- `enviar()` llama a `actualizarMensaxe("Hola")`
- El servicio emite "Hola" a todos los suscriptores
- El input se limpia: `textoInput = ''`

---

### **ITEM 3: Componente Receptor que se suscribe (0,5 puntos)**

```typescript
// receptor.component.ts
import { OnInit } from '@angular/core';
import { ComunicacionService } from '../comunicacion.service';

@Component({...})
export class ReceptorComponent implements OnInit {
  mensaxe: string = '';
  
  constructor(private comunicacionService: ComunicacionService) {}
  
  // ngOnInit es un ciclo de vida que se ejecuta cuando se inicia el componente
  ngOnInit() {
    // Suscribirse al Observable mensaxe$
    this.comunicacionService.mensaxe$.subscribe((nuevoMensaje: string) => {
      this.mensaxe = nuevoMensaje;
    });
  }
}
```

**¿Qué sucede?**
1. El componente se crea
2. `ngOnInit()` se ejecuta automáticamente
3. `.subscribe()` dice: "Dame notificación cada vez que el Observable emita un valor"
4. La arrow function `(nuevoMensaje) => {...}` se ejecuta cada vez que hay un nuevo valor
5. `this.mensaxe = nuevoMensaje` guarda el valor recibido
6. El párrafo `{{mensaxe}}` se actualiza automáticamente

**¿Cuándo se llama ngOnInit?**
```
Componente se crea
          ↓
   ngOnInit() ← AQUÍ se suscribe
          ↓
       template se renderiza
          ↓
       El componente está listo
```

---

### **ITEM 4: Receptor recibe y muestra cambios (0,5 puntos)**

```html
<!-- receptor.component.html -->
<p>{{ mensaxe }}</p>
```

**¿Qué sucede?**
- Cuando `this.mensaxe` cambia en TypeScript
- Angular detecta el cambio (Change Detection)
- El párrafo se actualiza automáticamente
- Usuario ve el mensaje enviado por el emisor

---

## 🔧 Tecnologías Usadas

### **BehaviorSubject vs Observable**

| Aspecto | Subject | BehaviorSubject |
|--------|---------|-----------------|
| Emite valor inicial | ❌ No | ✅ Sí |
| Necesita valor inicial | ❌ No | ✅ Sí |
| Nuevos suscriptores reciben último valor | ❌ No | ✅ Sí |
| Uso típico | Eventos simples | Estado compartido |

**Para este examen: usa `BehaviorSubject` ⭐**

---

## 📊 Flujo Completo

```
Usuario escribe "Hola" en emisor
              ↓
Input: textoInput = "Hola"
              ↓
Usuario hace click en "Enviar"
              ↓
enviar() se ejecuta
              ↓
comunicacionService.actualizarMensaxe("Hola")
              ↓
mensaxeSubject.next("Hola") ← EMITE EL VALOR
              ↓
Todos los suscriptores reciben "Hola"
              ↓
En receptor: this.mensaxe = "Hola"
              ↓
{{mensaxe}} en HTML se actualiza
              ↓
Usuario ve: "Hola" en el párrafo del receptor ✅
```

---

## 💡 Tips para el Examen

✅ **Orden para completar rápido (2-3 minutos):**
1. Crea el servicio con `BehaviorSubject` y `.next()`
2. Inyecta en emisor: `private comunicacionService`
3. Inyecta en receptor: `private comunicacionService`
4. Crea `ngOnInit()` en receptor con `.subscribe()`
5. Agrega `(click)="enviar()"` en botón
6. Agrega `[(ngModel)]` en input

✅ **Mínimo para 2 puntos:**
```typescript
// Servicio
private mensaxeSubject = new BehaviorSubject<string>('');
mensaxe$ = this.mensaxeSubject.asObservable();
actualizarMensaxe(texto: string) { this.mensaxeSubject.next(texto); }

// Emisor
constructor(private comunicacionService: ComunicacionService) {}
enviar() { this.comunicacionService.actualizarMensaxe(this.textoInput); }

// Receptor
ngOnInit() { this.comunicacionService.mensaxe$.subscribe(msg => this.mensaxe = msg); }
```

---

## 📦 Archivos Entregables

- ✅ `comunicacion.service.ts` - Servicio con BehaviorSubject
- ✅ `emisor.component.ts` - Componente que envía
- ✅ `emisor.component.html` - Plantilla del emisor
- ✅ `receptor.component.ts` - Componente que recibe
- ✅ `receptor.component.html` - Plantilla del receptor

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
