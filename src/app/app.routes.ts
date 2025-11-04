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
  { path: '', component: HomeComponent,
    // children: [
    //   { path: 'item/:id', component: ItemDetailComponent, outlet: 'detail' } // if the outlet is inside HomeComponent
    // ]
  },                     // primary outlet
  { path: 'item/:id', component: ItemDetailComponent, outlet: 'detail' },
  { path: 'sidebar', component: SidebarComponent, outlet: 'sidebar' }
];
