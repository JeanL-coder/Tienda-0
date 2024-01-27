import { Routes } from '@angular/router';
import { LoginComponent } from './vistas/login/login.component';

export const routes: Routes = [

  {
    path:'',
    redirectTo:'login', 
    pathMatch:'full'
  },
  {
    path:'',
    component:LoginComponent
  }
];
