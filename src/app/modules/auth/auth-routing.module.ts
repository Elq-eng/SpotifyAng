import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthPageComponent } from './pages/auth-page/auth-page.component';
import { CommonModule } from '@angular/common';

const routes: Routes = [
  {
    path:'login',
    component: AuthPageComponent
  },
  {
    path:'**',
    redirectTo:'/auth/login'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes), CommonModule],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
