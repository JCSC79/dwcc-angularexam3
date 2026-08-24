# PREGUNTA 2 - Two-Way Data Binding con ngModel (2 puntos)

## 📋 Enunciado Original

Partindo dos ficheiros contidos en **PREGUNTA2.zip** e do proxecto en branco fornecido para a exame, completa o código TS e HTML da compoñente **app** para que cumpra a seguinte funcionalidade:

1. **Ao escribir na caixa de texto ocorrerá o seguinte:**
   - a. O parágrafo amosará o texto *Ola, nome!* Onde «nome» será o valor introducido na caixa de texto. **(0,5 puntos)**
   - b. Se o nome corresponde á listaxe presentada polo select, ese será o valor que aparecerá seleccionado no mesmo. **(0,5 puntos)**

2. **Ao escoller un nome no select:**
   - a. O parágrafo amosará o texto *Ola, nome!* Onde «nome» será o valor escollido no select. **(0,5 puntos)**
   - b. O valor escollido aparecerá así mesmo na caixa de texto. **(0,5 puntos)**

---

## ❌ Código ANTES (Sin Resolver)

### app.component.ts
```typescript
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
}
```

### app.component.html
```html
<div>
  <input type="text" placeholder="Introduce o teu nome">
  <p>Ola, !</p>
  <select>
    <option value="" disabled selected>Ou escolla un nome aquí</option>
    <option value="Noa">Noa</option>
    <option value="Xoán">Xoán</option>
    <option value="Saínza">Saínza</option>
    <option value="Adrián">Adrián</option>
    <option value="Iria">Iria</option>
  </select>
</div>
```

---

## ✅ Código DESPUÉS (Resuelto)

### app.component.ts
```typescript
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
```

### app.component.html
```html
<div>
  <!-- ========== PUNTOS 1a + 2b: Input con two-way binding ngModel ==========
       - Punto 1a: Al escribir, el párrafo se actualiza automáticamente (0,5 puntos)
       - Punto 2b: Al elegir del select, el input se actualiza automáticamente (0,5 puntos)
       [(ngModel)]="nombre" hace binding bidireccional automático
  -->
  <input type="text" placeholder="Introduce o teu nome" [(ngModel)]="nombre">
  
  <!-- ========== PUNTOS 1a + 2a: Párrafo que se actualiza con el binding ==========
       - El párrafo se actualiza automáticamente porque está haciendo interpolación
       - {{nombre}} toma el valor de la variable nombre en tiempo real
       - Cumple punto 1a: Al escribir en input, el párrafo muestra "Ola, nombre!"
       - Cumple punto 2a: Al elegir en select, el párrafo muestra "Ola, nombre!"
  -->
  <p>Ola, {{nombre}}!</p>
  
  <!-- ========== PUNTOS 1b + 2a + 2b: Select con two-way binding ngModel ==========
       - Punto 1b: Si el texto del input coincide con una opción, se selecciona (0,5 puntos)
       - Punto 2a: Al elegir, el párrafo se actualiza (0,5 puntos)
       - Punto 2b: Al elegir, el input se actualiza (0,5 puntos)
       [(ngModel)]="nombre" hace que el select se actualice cuando nombre cambia
  -->
  <select [(ngModel)]="nombre">
    <option value="" disabled selected>Ou escolla un nome aquí</option>
    <option value="Noa">Noa</option>
    <option value="Xoán">Xoán</option>
    <option value="Saínza">Saínza</option>
    <option value="Adrián">Adrián</option>
    <option value="Iria">Iria</option>
  </select>
</div>
```

---

## 🎓 Explicación Didáctica

### ¿Qué es Two-Way Data Binding?

Es un mecanismo de Angular que sincroniza datos entre el **modelo (TypeScript)** y la **vista (HTML)** automáticamente:
- Cuando el usuario escribe en el input → se actualiza la variable TypeScript
- Cuando la variable TypeScript cambia → se actualiza el HTML
- **Resultado**: Los datos siempre están sincronizados en ambas direcciones

### Sintaxis: `[(ngModel)]`

```html
<input [(ngModel)]="nombre">
```

- **`[...]`**: Property binding (componente → HTML)
- **`(...)`**: Event binding (HTML → componente)
- **`[(...)]`**: Combinación = two-way binding
- **`ngModel`**: La directiva que hace la sincronización

#### Parámetros:
- **Propiedad**: `nombre` (la variable en TypeScript)

#### ¿Qué necesitas?
1. **Importar FormsModule** en el componente (muy importante)
2. **Declarar la variable** que guardará el valor
3. **Usar `[(ngModel)]="variable"`** en el HTML

---

## 🔄 Flujo Completo (Paso a Paso)

### Escenario 1: Usuario escribe "Adrián" en el input

```
1. Usuario escribe "A" en el input
   ↓
2. El evento "input" se dispara
   ↓
3. ngModel actualiza la variable "nombre = 'A'"
   ↓
4. Angular detecta el cambio en "nombre"
   ↓
5. El párrafo {{nombre}} se actualiza → "Ola, A!"
   ↓
6. El select busca una opción con value="A" → no encuentra, no selecciona nada
   ↓
7. Usuario sigue escribiendo... hasta "Adrián"
   ↓
8. nombre = "Adrián"
   ↓
9. El párrafo muestra "Ola, Adrián!"
   ↓
10. El select encuentra <option value="Adrián"> y la selecciona automáticamente ✅
```

### Escenario 2: Usuario elige "Noa" en el select

```
1. Usuario hace click en la opción "Noa"
   ↓
2. El evento "change" se dispara
   ↓
3. ngModel actualiza "nombre = 'Noa'"
   ↓
4. Angular detecta el cambio
   ↓
5. El input muestra "Noa" automáticamente ✅
   ↓
6. El párrafo muestra "Ola, Noa!" automáticamente ✅
```

---

## 📌 Conceptos Clave

| Concepto | Explicación | Ejemplo |
|----------|-------------|---------|
| **FormsModule** | Módulo que proporciona ngModel | `imports: [FormsModule]` |
| **[(ngModel)]** | Two-way binding | `<input [(ngModel)]="nombre">` |
| **{{}}** | Interpolación (mostrar variable) | `<p>{{nombre}}</p>` |
| **Property Binding []** | Componente → HTML | `[value]="nombre"` |
| **Event Binding ()** | HTML → Componente | `(change)="actualizar()"` |

---

## 🎯 Puntuación por Partes

| Punto | Qué hace | Código necesario | Puntos |
|-------|----------|------------------|--------|
| **1a** | Párrafo actualizado al escribir | `[(ngModel)]="nombre"` + `{{nombre}}` | 0,5 |
| **1b** | Select se selecciona automáticamente | `[(ngModel)]="nombre"` en select | 0,5 |
| **2a** | Párrafo actualizado al elegir select | `{{nombre}}` (automático) | 0,5 |
| **2b** | Input actualizado al elegir select | `[(ngModel)]="nombre"` en input | 0,5 |

---

## 💡 Tips para el Examen (Cómo Arañar Puntos)

✅ **Lo MÍNIMO necesario:**
- Importar FormsModule
- Una variable `nombre: string = ''`
- `[(ngModel)]="nombre"` en input
- `[(ngModel)]="nombre"` en select
- `{{nombre}}` en el párrafo

✅ **Orden para completar rápido:**
1. Copia el HTML base
2. Importa FormsModule
3. Agrega la variable `nombre`
4. Añade `[(ngModel)]="nombre"` en 2 lugares
5. Añade `{{nombre}}` en el párrafo
6. **¡Listo! 2 puntos asegurados**

❌ **Errores comunes:**
- Olvidar importar FormsModule → NO funciona ngModel
- Usar `[ngModel]` en lugar de `[(ngModel)]` → Only one-way, no funciona select
- No actualizar el párrafo con `{{nombre}}`

---

## 📊 Tabla de Compatibilidad

| Si hace esto... | El párrafo se actualiza | El input se actualiza | El select se actualiza |
|-----------------|------------------------|----------------------|------------------------|
| Escribe en input | ✅ | ✅ | ✅ |
| Elige en select | ✅ | ✅ | ✅ |
| Cambia `nombre` en JS | ✅ | ✅ | ✅ |

---

## 📦 Archivos Entregables

- ✅ `app.component.ts`
- ✅ `app.component.html`
- (El CSS ya está hecho)
