# PREGUNTA 1 - Manipulación de Elementos HTML con @ViewChild (2 puntos)

## 📋 Enunciado Original

Partindo dos ficheiros contidos en **PREGUNTA1.zip** e do proxecto en branco fornecido para a exame, completa o código TS e HTML da compoñente **app** para que cumpra a seguinte funcionalidad:

1. **Toma a referencia do div do HTML usando @ViewChild** para poder manipulalo desde TS (chámalle bolaBotando). **(0,1 punto)**
2. **Modifica o comportamento dos botóns** para que:
   - Ao premer o botón **ACELERAR** disminúa o tempo de animación nun 10%. **(0,5 puntos)**
   - Ao premer o botón **DECELERAR** aumente o tempo de animación nun 10%. **(0,5 puntos)**

---

## ❌ Código ANTES (Sin Resolver)

### app.component.ts
```typescript
import { Component, ElementRef } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  actualizarAnimacion():void {
    // COMPLETA O CÓDIGO SEGUINTE PARA MANIPULAR A DURACIÓN DA ANIMACIÓN DA BOLA
    // this.bolaBotando.nativeElement.style.animationDuration
  }
}
```

### app.component.html
```html
<div class="bolaBotando" #bolaBotando></div>
<button>ACELERAR</button>
<button>DECELERAR</button>
```

---

## ✅ Código DESPUÉS (Resuelto)

### app.component.ts
```typescript
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
  duracionAnimacion: number = 2; // Asumiendo que en CSS es animation-duration: 2s

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
```

### app.component.html
```html
<div class="bolaBotando" #bolaBotando></div>
<button (click)="acelerar()">ACELERAR</button>
<button (click)="decelerar()">DECELERAR</button>
```

---

## 🎓 Explicación Didáctica

### 1️⃣ PUNTO 1: @ViewChild (0,1 punto)

#### ¿Qué es @ViewChild?
Es un **decorador de Angular** que te permite acceder a elementos HTML desde TypeScript. Es como decirle: "Oye Angular, dame una referencia a ese elemento del HTML".

#### Sintaxis y Parámetros:
```typescript
@ViewChild('bolaBotando') bolaBotando!: ElementRef;
```

- **`@ViewChild()`**: El decorador que indica que quieres una referencia a un elemento
- **`'bolaBotando'`**: El nombre del template reference (`#bolaBotando` en el HTML)
- **`bolaBotando`**: La variable TypeScript donde se guardará la referencia
- **`ElementRef`**: El tipo que contiene el elemento HTML nativo
- **`!`**: El operador "non-null assertion" (le decimos a TypeScript "confía, esto no será null")

#### ¿Por qué lo necesitamos?
Porque en Angular **NO puedes acceder al DOM directamente**. Necesitas pedirle permiso mediante ViewChild. Una vez lo tienes, accedes así:
```typescript
this.bolaBotando.nativeElement.style.animationDuration = '1.8s';
```

---

### 2️⃣ PUNTO 2a: ACELERAR - Disminuir 10% (0,5 puntos)

#### Cálculo matemático:
Si la animación tarda 2 segundos y queremos hacerla 10% más rápida:
- **Original**: 2s
- **10% de 2s**: 0.2s
- **Nueva duración**: 2 - 0.2 = 1.8s
- **Fórmula**: `duracionAnimacion * 0.9`

#### Código:
```typescript
acelerar(): void {
  this.duracionAnimacion = this.duracionAnimacion * 0.9; // Multiplica por 0.9 = reduce 10%
  this.actualizarAnimacion(); // Aplica el cambio al DOM
}
```

#### En HTML:
```html
<button (click)="acelerar()">ACELERAR</button>
```
- **`(click)="acelerar()"`**: Binding de evento. Cuando hagas click, ejecuta el método `acelerar()`

---

### 3️⃣ PUNTO 2b: DECELERAR - Aumentar 10% (0,5 puntos)

#### Cálculo matemático:
Si la animación tarda 2 segundos y queremos hacerla 10% más lenta:
- **Original**: 2s
- **10% de 2s**: 0.2s
- **Nueva duración**: 2 + 0.2 = 2.2s
- **Fórmula**: `duracionAnimacion * 1.1`

#### Código:
```typescript
decelerar(): void {
  this.duracionAnimacion = this.duracionAnimacion * 1.1; // Multiplica por 1.1 = aumenta 10%
  this.actualizarAnimacion(); // Aplica el cambio al DOM
}
```

---

## 📌 Conceptos Clave a Recordar (Para el Examen)

| Concepto | Explicación | Cuándo lo usas |
|----------|-------------|----------------|
| **@ViewChild** | Accede a elementos HTML desde TS | Cuando necesitas manipular el DOM programáticamente |
| **ElementRef** | Wrapper del elemento HTML nativo | Siempre que uses ViewChild |
| **nativeElement** | El elemento HTML actual | Para acceder a propiedades CSS del elemento |
| **.style.animationDuration** | Propiedad CSS manipulable desde JS | Para cambiar velocidades, colores, etc. del DOM |
| **ngAfterViewInit** | Hook del ciclo de vida | Aquí inicializa ViewChild (NO en ngOnInit) |
| **(click)="método()"** | Event binding | Para conectar botones a funciones |

---

## 🧪 Cómo Funciona en el Examen Real

**Flujo de uso:**
1. Usuario hace **click en ACELERAR** → Se ejecuta `acelerar()`
2. Se calcula la nueva duración → `duracionAnimacion = duracionAnimacion * 0.9`
3. Se llama a `actualizarAnimacion()` → Modifica el CSS del elemento
4. La bola se mueve más rápido ✅

**Flujo opuesto para DECELERAR:**
1. Usuario hace **click en DECELERAR** → Se ejecuta `decelerar()`
2. Se calcula nueva duración → `duracionAnimacion = duracionAnimacion * 1.1`
3. Se llama a `actualizarAnimacion()` → Modifica el CSS
4. La bola se mueve más lento ✅

---

## 💡 Tips para el Examen Real (Cómo Arañar Puntos)

- ✅ **Punto 1 (0,1)**: Solo necesitas `@ViewChild('bolaBotando') bolaBotando!: ElementRef;`
- ✅ **Punto 2a (0,5)**: Un botón con `(click)="acelerar()"` y una línea `* 0.9`
- ✅ **Punto 2b (0,5)**: Un botón con `(click)="decelerar()"` y una línea `* 1.1`
- 🎯 **Rápido**: Copia la estructura, cambia los números, listo.

---

## 📦 Archivos Entregables

- ✅ `app.component.ts`
- ✅ `app.component.html`
- (El CSS ya está hecho)
