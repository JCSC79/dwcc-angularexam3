# 📋 PREGUNTA 5 - Movimiento de Personaje con Teclado (2 puntos)

## 🎯 Objetivo
Implementar un juego simple donde un personaje (cuadrado azul) se puede mover dentro de un tablero usando las **flechas del teclado**. El movimiento debe ser en tiempo real, en 4 direcciones, con pasos de 10 píxeles, y limitado a los bordes del tablero.

---

## ✅ Items Puntables (2 puntos totales)

### **ITEM 1: Personaje en el centro (0,5 puntos)**
- Posición inicial: `posX = 180`, `posY = 180`
- Centro del tablero 400x400 con personaje 40x40
- HTML: `[style.left.px]="posX"` y `[style.top.px]="posY"`

### **ITEM 2a: Pasos de 10 píxeles (0,25 puntos)**
- Cada acción mueve 10 píxeles
- `private pasoMovimiento = 10`
- `nueva posición = posición actual + deltaX/deltaY`

### **ITEM 2b: 4 direcciones en tiempo real (1 punto)**
- Escuchar teclado con `@HostListener('window:keydown')`
- ArrowUp: `mover(0, -10)` ⬆️
- ArrowDown: `mover(0, 10)` ⬇️
- ArrowLeft: `mover(-10, 0)` ⬅️
- ArrowRight: `mover(10, 0)` ➡️

### **ITEM 2c: Solo dentro de límites (0,25 puntos)**
- Límites X: [0, 360]
- Límites Y: [0, 360]
- Si sale, se "pega" al límite
- Validar: `Math.max(0, Math.min(nuevaX, limiteX))`

---

## 🔧 Conceptos Clave

| Concepto | Explicación |
|----------|------------|
| **@HostListener** | Decorador que escucha eventos en el componente |
| **event.key** | Nombre de la tecla presionada |
| **[style.left.px]** | Vinculación de estilo dinámico |
| **KeyboardEvent** | Tipo de evento del teclado |

---

## 📊 Flujo

```
Usuario presiona flecha
         ↓
@HostListener detecta keydown
         ↓
manejarEventoTeclado() se ejecuta
         ↓
event.key = 'ArrowRight' (ejemplo)
         ↓
mover(10, 0) se ejecuta
         ↓
Valida límites
         ↓
posX = nuevaX
         ↓
[style.left.px]="posX" se actualiza
         ↓
Personaje se mueve ✅
```

---

## 💡 Tips

1. **Centro**: `(ancho - tamaño) / 2 = 180`
2. **Límites**: `ancho - tamaño = 360`
3. **Detectar tecla**: `event.key` en `switch()`
4. **Mover**: `private mover(deltaX, deltaY)`
5. **Validar**: `Math.max()` y `Math.min()`

---

## 📦 Archivos

- ✅ `xogo.component.ts` - Lógica de movimiento
- ✅ `xogo.component.html` - Estilos dinámicos
- ✅ `xogo.component.css` - (ya existe)

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
