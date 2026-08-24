# 📋 PREGUNTA 4 - Guards y Rutas Protegidas (2 puntos)

## 🎯 Objetivo
Implementar un sistema de **navegación con rutas** y un **guard** que proteja una ruta privada basándose en un checkbox. El guard verifica un valor almacenado en `sessionStorage` antes de permitir el acceso.

---

## ✅ Items Puntables (2 puntos totales)

### **ITEM 1: Ruta pública sin protección (0,5 puntos)**

```typescript
// app.routes.ts
export const routes: Routes = [
  // ITEM 1: Ruta pública - SIN guard, siempre accesible
  { path: 'publico', component: PublicoComponent },
  
  // ITEM 1: Ruta privada - CON guard
  { path: 'privado', component: PrivadoComponent, canActivate: [controlAccesoGuard] }
];
```

**¿Qué sucede?**
- Cualquier usuario puede acceder a `/publico`
- No hay restricciones, no hay guard

---

### **ITEM 2: Botón PÚBLICO que navega (0,5 puntos)**

```typescript
// app.component.ts
irAPublico() {
  this.router.navigate(['/publico']);
}
```

```html
<button (click)="irAPublico()">PÚBLICO</button>
```

**¿Qué sucede?**
- Click en botón → navega a `/publico` → Se renderiza PublicoComponent

---

### **ITEM 3: Botón PRIVADO que navega (0,5 puntos)**

```typescript
// app.component.ts
irAPrivado() {
  this.router.navigate(['/privado']);
}
```

```html
<button (click)="irAPrivado()">PRIVADO</button>
```

**¿Qué sucede?**
- Click en botón → intenta navegar a `/privado`
- El guard intercept la navegación y verifica el checkbox

---

### **ITEM 4: Guard que protege la ruta privada (0,5 puntos)**

```typescript
// control-acceso.guard.ts
export const controlAccesoGuard: CanActivateFn = (route, state) => {
  const accesoPermitido = sessionStorage.getItem('acceso') === 'true';
  return accesoPermitido;
};
```

**¿Qué sucede?**
- Lee `sessionStorage` con clave "acceso"
- Si es "true" → permite acceso
- Si es "false" o no existe → deniega acceso

---

### **ITEM 5: Checkbox que guarda en sessionStorage (0,5 puntos)**

```typescript
// app.component.ts
acceso: boolean = false;

actualizarAcceso() {
  sessionStorage.setItem('acceso', this.acceso.toString());
}
```

```html
<input type="checkbox" [(ngModel)]="acceso" (change)="actualizarAcceso()">
```

**¿Qué sucede?**
- Usuario marca/desmarca checkbox
- Se guarda "true" o "false" en sessionStorage
- El guard lee este valor para permitir/denegar acceso

---

## 🔧 Conceptos Clave

| Concepto | Explicación |
|----------|------------|
| **Router** | Servicio para navegar entre rutas |
| **Rutas** | Mapa de URLs a componentes |
| **Guard** | Función que decide si se permite acceder a una ruta |
| **CanActivateFn** | Tipo de guard moderno (functional) |
| **sessionStorage** | Almacenamiento temporal en el navegador |
| **RouterOutlet** | Contenedor donde se renderiza el componente de la ruta activa |

---

## 📊 Flujos

**Sin checkbox marcado:**
```
Click PRIVADO → Guard lee 'false' → Rechaza → ❌
```

**Con checkbox marcado:**
```
Click PRIVADO → Guard lee 'true' → Permite → ✅
```

**PÚBLICO siempre:**
```
Click PÚBLICO → Sin guard → Siempre permite → ✅
```

---

## 💡 Tips para Examen

1. **Guard**: Leer `sessionStorage` y retornar boolean
2. **Navegación**: Inyectar `Router` y usar `.navigate(['/ruta'])`
3. **Checkbox**: Guardar en `sessionStorage` con `setItem()`
4. **Rutas**: Agregar `canActivate: [miGuard]` a la ruta privada
5. **Renderizar**: Usar `<router-outlet></router-outlet>`

---

## 📦 Archivos Entregables

- ✅ `control-acceso.guard.ts`
- ✅ `app.component.ts`
- ✅ `app.component.html`
- ✅ `app.routes.ts`

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
