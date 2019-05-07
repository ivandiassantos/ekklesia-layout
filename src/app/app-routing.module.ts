import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginLayoutComponent } from './core/layouts/login-layout/login-layout.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [{
  component: LoginLayoutComponent,
  path: '',
  children: [{
    component:LoginComponent,
    path:''
  }]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
