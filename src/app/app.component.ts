import { Component } from '@angular/core';
import {NavigationEnd, NavigationStart, Router, RouterOutlet} from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angular-v-18-named-outlets';

  constructor(router: Router) {
    router.events.subscribe((e: any) => {
      if (e instanceof NavigationStart) console.log('NAV START', e);
      if (e instanceof NavigationEnd) console.log('NAV END', e);
    });
  }
}
