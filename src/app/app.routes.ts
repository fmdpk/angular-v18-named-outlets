import { Routes } from '@angular/router';

export const routes: Routes = [
  // { path: '', component: HomeComponent,
  //   children: [
  //     { path: 'item/:id', loadComponent: () => import('./item-detail/item-detail.component').then(m => m.ItemDetailComponent), outlet: 'detail' } // if the outlet is inside HomeComponent
  //   ]
  // },
  { path: '', loadComponent: () => import('./home/home.component').then(m => m.HomeComponent),},  // primary outlet
  { path: 'item/:id', loadComponent: () => import('./item-detail/item-detail.component').then(m => m.ItemDetailComponent), outlet: 'detail' },
  { path: 'sidebar', loadComponent: () => import('./sidebar/sidebar.component').then(m => m.SidebarComponent), outlet: 'sidebar' }
];
