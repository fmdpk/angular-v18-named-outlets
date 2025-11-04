import { Component } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-item-detail',
  standalone: true,
  imports: [],
  templateUrl: './item-detail.component.html',
  styleUrl: './item-detail.component.scss'
})
export class ItemDetailComponent {
  id!: number;
  constructor(private route: ActivatedRoute, private router: Router) {}
  ngOnInit() {
    this.route.params.subscribe(params => {
      console.log(params)
      this.id = +params['id'];
    });
  }
  close() {
    // remove the detail outlet
    this.router.navigate([{ outlets: { detail: null } }]);
  }
}
