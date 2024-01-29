import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter, Routes } from '@angular/router';
import { appRoutes } from './app/app.routes';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { AdminHomeComponent } from './app/admin/admin-home/admin-home.component';

const routes: Routes = [
  {path: 'admin-mone', component: AdminHomeComponent, pathMatch: 'full'},
];

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes),
    provideRouter(appRoutes),
  ]
}).catch((err) => console.error(err));
