import { Routes } from '@angular/router';
import { LoginComponent } from './vistas/login/login.component';
import { RegistroComponent } from './vistas/registro/registro.component';

export const routes: Routes = [

  {path:'login', component:LoginComponent},
  {path: 'registro', component:RegistroComponent},
  // ... Otras Rutas
  
];
