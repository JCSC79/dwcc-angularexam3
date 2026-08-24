# 🎓 EXAMEN DWCC - Angular (Todas las Preguntas Resueltas)

## 📊 Resumen General

Examen del módulo **DWCC** (Desarrollo Web con Cliente) - Evaluación final (09/06/2026).
- **Centro**: CIFP Rodolfo Ucha Piñeiro
- **Módulo**: DWCC
- **Curso**: 2º DAW
- **Ciclo**: DAW Ordinario
- **Puntuación Total**: 10 puntos (2 puntos por pregunta)

---

## 📑 Preguntas y Temas

| Pregunta | Tema | Puntos | Estado |
|----------|------|--------|--------|
| [PREGUNTA1](#pregunta1) | ViewChild + Two-Way Binding | 2 | ✅ |
| [PREGUNTA2](#pregunta2) | Two-Way Binding (ngModel) | 2 | ✅ |
| [PREGUNTA3](#pregunta3) | Servicios y Observables | 2 | ✅ |
| [PREGUNTA4](#pregunta4) | Guards y Rutas | 2 | ✅ |
| [PREGUNTA5](#pregunta5) | Eventos de Teclado | 2 | ✅ |

---

## 🔍 Detalles por Pregunta

### PREGUNTA1

**Tema**: ViewChild + Manipulación del DOM + Two-Way Binding

**Items**:
1. Usar `@ViewChild` para acceder al div del HTML desde TypeScript (0,1 puntos)
2. Botón ACELERAR disminuye tiempo de animación 10% (0,5 puntos)
3. Botón DECELERAR aumenta tiempo de animación 10% (0,5 puntos)

**Conceptos Clave**:
- `@ViewChild('#bolaBoitando')` → Acceder a referencias del HTML
- `ElementRef` → Tipo para elementos del DOM
- Manipulación de propiedades CSS con `.nativeElement.style`
- Dos-way binding para animar

**Entregables**: `app.component.ts` + `app.component.html`

[📖 Ver PREGUNTA1 completa](PREGUNTA1/README.md)

---

### PREGUNTA2

**Tema**: Two-Way Data Binding con ngModel

**Items**:
1. Escribir en input → párrafo se actualiza + select se selecciona (1 punto)
2. Escoger en select → párrafo se actualiza + input se actualiza (1 punto)

**Conceptos Clave**:
- `[(ngModel)]` → Two-way binding
- `{{variable}}` → Interpolación
- `FormsModule` → Necesario para ngModel
- Centro de verdad única (una variable sincroniza todo)

**Entregables**: `app.component.ts` + `app.component.html`

[📖 Ver PREGUNTA2 completa](PREGUNTA2/README.md)

---

### PREGUNTA3

**Tema**: Comunicación entre Componentes con Servicios y Observables

**Items**:
1. Servicio con `BehaviorSubject` para propiedad `mensaxe` (0,5 puntos)
2. Emisor inyecta servicio y botón envía mensaje (0,5 puntos)
3. Receptor se suscribe en `ngOnInit()` (0,5 puntos)
4. Receptor recibe y muestra cambios automáticamente (0,5 puntos)

**Conceptos Clave**:
- `@Injectable()` → Decorador de servicio
- `BehaviorSubject<T>` → Observable que guarda valor
- `.subscribe()` → Suscribirse a cambios
- `OnInit` → Ciclo de vida para inicializar
- Inyección de dependencias
- Patrón Observador (Publisher-Subscriber)

**Entregables**: `comunicacion.service.ts` + `emisor.component.ts` + `receptor.component.ts`

[📖 Ver PREGUNTA3 completa](PREGUNTA3/README.md)

---

### PREGUNTA4

**Tema**: Guards y Rutas Protegidas

**Items**:
1. Ruta `/publico` sin protección (0,5 puntos)
2. Botón PÚBLICO navega a `/publico` (0,5 puntos)
3. Botón PRIVADO navega a `/privado` (0,5 puntos)
4. Guard `control-acceso` protege `/privado` (0,5 puntos)
5. Checkbox guarda acceso en sessionStorage (0,5 puntos)

**Conceptos Clave**:
- `@Router` → Servicio de navegación
- `CanActivateFn` → Guard moderno (functional)
- `canActivate: [guardName]` → Aplicar guard a una ruta
- `<router-outlet>` → Contenedor de componentes ruteados
- `sessionStorage` → Almacenamiento temporal del navegador

**Entregables**: `control-acceso.guard.ts` + `app.component.ts` + `app.routes.ts`

[📖 Ver PREGUNTA4 completa](PREGUNTA4/README.md)

---

### PREGUNTA5

**Tema**: Movimiento de Personaje con Eventos del Teclado

**Items**:
1. Personaje aparece en el centro (0,5 puntos)
2a. Movimiento en pasos de 10 píxeles (0,25 puntos)
2b. Movimiento en 4 direcciones con flechas (1 punto)
2c. Solo dentro de los límites del tablero (0,25 puntos)

**Conceptos Clave**:
- `@HostListener` → Escuchar eventos en componente
- `event.key` → Detectar tecla presionada
- `[style.left.px]` → Vinculación dinámica de estilos
- Validación de límites con `Math.max()` y `Math.min()`
- Posicionamiento absoluto en CSS

**Entregables**: `xogo.component.ts` + `xogo.component.html`

[📖 Ver PREGUNTA5 completa](PREGUNTA5/README.md)

---

## 🚀 Guía Rápida para el Examen

### Antes del examen:
1. Domina estos conceptos clave:
   - **Two-way binding**: `[(ngModel)]`
   - **Servicios**: `@Injectable()`, inyección de dependencias
   - **Observables**: `BehaviorSubject`, `.subscribe()`
   - **Guards**: `CanActivateFn`, `canActivate`
   - **Eventos**: `@HostListener`, `event.key`
   - **Estilos dinámicos**: `[style.prop.unit]="variable"`

2. Memoriza estos snippets de 30 segundos:
   ```typescript
   // Two-way binding
   [(ngModel)]="variable"
   
   // Servicio con Observable
   private subject = new BehaviorSubject<T>(valor);
   observable$ = this.subject.asObservable();
   
   // Guard
   export const miGuard: CanActivateFn = () => true;
   
   // Evento teclado
   @HostListener('window:keydown', ['$event'])
   manejar(e: KeyboardEvent) { ... }
   ```

### Durante el examen:
1. **Leer bien el enunciado** → Entender todos los items puntables
2. **Dividir en partes** → Resolver item por item
3. **Comentar en el código** → Indicar qué parte resuelve cada punto
4. **Probar mientras vas** → No esperar a terminar para probar
5. **Importaciones primero** → `FormsModule`, servicios, directivas

### Puntuación:
- **0,25 puntos**: Pequeña funcionalidad
- **0,5 puntos**: Funcionalidad mediana
- **1 punto**: Funcionalidad compleja
- **Total**: 10 puntos (para 8 en calificación)

---

## 📁 Estructura del Repositorio

```
/
├── PREGUNTA1/          # ViewChild + Animación
│   ├── src/app/
│   │   ├── app.component.ts
│   │   └── app.component.html
│   └── README.md
├── PREGUNTA2/          # Two-Way Binding
│   ├── src/app/
│   │   ├── app.component.ts
│   │   └── app.component.html
│   └── README.md
├── PREGUNTA3/          # Servicios y Observables
│   ├── src/app/
│   │   ├── comunicacion.service.ts
│   │   ├── emisor/
│   │   │   ├── emisor.component.ts
│   │   │   └── emisor.component.html
│   │   ├── receptor/
│   │   │   ├── receptor.component.ts
│   │   │   └── receptor.component.html
│   │   └── app.component.html
│   └── README.md
├── PREGUNTA4/          # Guards y Rutas
│   ├── src/app/
│   │   ├── control-acceso.guard.ts
│   │   ├── app.component.ts
│   │   ├── app.routes.ts
│   │   └── app.component.html
│   └── README.md
├── PREGUNTA5/          # Movimiento Teclado
│   ├── src/app/
│   │   ├── xogo/
│   │   │   ├── xogo.component.ts
│   │   │   └── xogo.component.html
│   │   └── app.component.html
│   └── README.md
└── README.md           # Este archivo
```

---

## 🔗 Ramas en GitHub

- **`main`** → Código resuelto (listo para estudiar)
- **`sin-resolver`** → Código sin resolver (para practicar)

---

## 🎯 Cómo Usar Este Repositorio

### Para Estudiar:
1. Clonar el repo
2. Leer el README de cada PREGUNTA
3. Revisar el código comentado en TypeScript y HTML
4. Ejecutar `ng serve` en cada carpeta para ver en acción

### Para Practicar:
1. Cambiar a rama `sin-resolver`
2. Intentar resolver cada pregunta
3. Comparar con `main` para ver la solución
4. Entender por qué se hace de esa manera

### Para Examen Real:
1. Revisar los conceptos clave de arriba
2. Hacer los ejercicios de la rama `sin-resolver`
3. Medir tiempo (cada pregunta ≈ 15 minutos)
4. No copiar → Entender y practicar

---

## 💡 Consejos Finales

✅ **Lo MÁS importante**:
- Entender qué hace cada línea de código
- Saber POR QUÉ se usa cada sintaxis
- Practicar sin mirar las soluciones

❌ **Errores comunes**:
- Olvidar importaciones (`FormsModule`, `Router`, etc.)
- No declarar variables que se usan en el HTML
- Confundir `[propiedad]` con `[(ngModel)]`
- No validar límites o condiciones
- Copiar sin entender

🎓 **Objetivo del examen**:
- Demostrar que sabes Angular a nivel práctico
- No es memorizar, es resolver problemas
- Cada línea debe tener un propósito

---

## 📚 Recursos Externos

- [Angular Docs - Two-way Binding](https://angular.io/guide/two-way-binding)
- [Angular Docs - Services](https://angular.io/guide/creating-injectable-service)
- [Angular Docs - Guards](https://angular.io/api/router/CanActivateFn)
- [Angular Docs - Routing](https://angular.io/guide/routing-overview)
- [RxJS Docs - BehaviorSubject](https://rxjs.dev/api/index/class/BehaviorSubject)

---

## 📞 Preguntas?

Si algo no está claro:
1. **Lee el README de la pregunta** → Explicación detallada
2. **Revisa el código comentado** → Explicación línea a línea
3. **Ejecuta y prueba** → Ver en acción
4. **Compara con rama `sin-resolver`** → Ver diferencias

---

**¡Buena suerte en el examen! 🚀**

Hecho con ❤️ para practicar Angular
