import { Routes } from '@angular/router';
import { controlAccesoGuard } from './control-acceso.guard';
import { PublicoComponent } from './publico/publico.component';
import { PrivadoComponent } from './privado/privado.component';

export const routes: Routes = [
    { path: 'publico', component: PublicoComponent },
    { path: 'privado', component: PrivadoComponent, canActivate: [controlAccesoGuard] }
];
