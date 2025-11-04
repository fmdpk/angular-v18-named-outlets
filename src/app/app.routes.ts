import { Routes } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {ItemDetailComponent} from './item-detail/item-detail.component';
import {SidebarComponent} from './sidebar/sidebar.component';

export const routes: Routes = [
  // { path: '', component: HomeComponent,
  //   children: [
  //     { path: 'item/:id', component: ItemDetailComponent, outlet: 'detail' } // if the outlet is inside HomeComponent
  //   ]
  // },
  { path: '', loadComponent: () => import('./home/home.component').then(m => m.HomeComponent),},  // primary outlet
  { path: 'item/:id', loadComponent: () => import('./item-detail/item-detail.component').then(m => m.ItemDetailComponent), outlet: 'detail' },
  { path: 'sidebar', loadComponent: () => import('./sidebar/sidebar.component').then(m => m.SidebarComponent), outlet: 'sidebar' }
];
