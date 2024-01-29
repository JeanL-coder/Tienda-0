import { Routes } from '@angular/router';
import { LoginComponent } from './vistas/login/login.component';
import { RegistroComponent } from './vistas/registro/registro.component';
import { AdminHomeComponent } from './admin/admin-home/admin-home.component';


export const appRoutes: Routes = [

  {path:'login', component:LoginComponent},
  {path: 'registro', component:RegistroComponent},
  {path: 'admin-home', component:AdminHomeComponent,  pathMatch: 'full'},
  // ... Otras Rutas
  
];
