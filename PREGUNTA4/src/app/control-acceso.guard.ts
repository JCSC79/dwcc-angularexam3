import { CanActivateFn } from '@angular/router';

export const controlAccesoGuard: CanActivateFn = (route, state) => {
  return true; // Este return é só un exemplo para que funcione a app, podes eliminalo libremente
};
