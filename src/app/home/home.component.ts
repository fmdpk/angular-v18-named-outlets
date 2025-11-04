import { Component } from '@angular/core';
import {ActivatedRoute, Router, RouterModule} from '@angular/router';
import {NgForOf} from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    RouterModule,
    NgForOf
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  items = [
    { id: 1, name: 'Item One'},
    { id: 2, name: 'Item Two'},
    { id: 3, name: 'Item Three'}
  ];

  constructor(private router: Router, private route: ActivatedRoute) {}

  openSidebar() {
    // navigate to sidebar outlet
    this.router.navigate([{ outlets: { sidebar: ['sidebar'] } }], { relativeTo: this.route });
  }

  // open detail into the named outlet "detail"
  openDetail(id: number) {
    // absolute route from root: preserve primary as '', set detail outlet
    this.router.navigate(
      ['/', { outlets: { detail: ['item', id] } }]
    );
  }
}
