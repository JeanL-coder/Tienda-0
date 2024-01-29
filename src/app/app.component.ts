import { Component } from '@angular/core';
//import { NavigationEnd, NavigationError, NavigationStart, RouterModule } from '@angular/router';
import { AdminHomeComponent } from './admin/admin-home/admin-home.component';
import { RouterOutlet } from '@angular/router';
//* router diagnostic
import { Router, Event, NavigationStart, NavigationEnd, NavigationError } from '@angular/router'


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Tienda-O';

  constructor(private router: Router) {
    //For diagnostic only
    this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationStart) {
        console.log('NavigationStart:', event);       
      }
      if (event instanceof NavigationEnd) {
        console.log('NavigationEnd:', event);
      }
      if (event instanceof NavigationError) {
        console.log('NavigationError:', event);
      }
    });
  } 
}
