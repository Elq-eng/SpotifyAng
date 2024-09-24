import { Routes } from '@angular/router';
import { HomepageComponent } from '@modules/home/page/homepage/homepage.component';

export const routes: Routes = [
  {
    path: 'auth',
    loadChildren:() => import('./modules/auth/auth.module').then( m=> m.AuthModule)
  },

  {
    path: '', 
    component: HomepageComponent,
    loadChildren:()=> import(`./modules/home/home.module`).then(m => m.HomeModule )
  }
];
