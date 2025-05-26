import { Routes } from '@angular/router';
import { InicioComponent } from './components/inicio/inicio.component';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },

  {
    path: 'inicio',
    loadComponent: () => import('./components/inicio/inicio.component').then((m) => m.InicioComponent),
    // component: InicioComponent
  },

  {
    path: 'control-medicamentos',
    loadComponent: () => import('./components/control-medicamentos/control-medicamentos.component').then((m) => m.ControlMedicamentosComponent),
  },

  {
    path: 'historial-epileptico',
    loadComponent: () => import('./components/historial-epileptico/historial-epileptico.component').then((m) => m.HistorialEpilepticoComponent),
  },

  

  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },

];
