import { CanActivateFn } from '@angular/router';

// ========== ITEM 4: Guard que protege la ruta privada ==========
// CanActivateFn: Tipo de guard que decide si se puede activar una ruta
// Parámetros:
//   - route: Información de la ruta que se intenta acceder
//   - state: Estado actual del router
// Return: boolean o Promise<boolean>
//   - true: Permitir acceso a la ruta
//   - false: Denegar acceso a la ruta
export const controlAccesoGuard: CanActivateFn = (route, state) => {
  // ========== ITEM 4a: Obtener el valor del checkbox desde sessionStorage ==========
  // sessionStorage.getItem('acceso') devuelve:
  //   - 'true' (string) si el checkbox está marcado
  //   - 'false' (string) si no está marcado
  //   - null si no existe la clave
  const accesoPermitido = sessionStorage.getItem('acceso') === 'true';
  
  // ========== ITEM 4b: Controlar la navegación basado en el checkbox ==========
  // Si accesoPermitido es true → retorna true → se permite acceder a /privado
  // Si accesoPermitido es false → retorna false → NO se permite acceder a /privado
  return accesoPermitido;
};
