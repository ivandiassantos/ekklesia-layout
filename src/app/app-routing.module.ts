import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginLayoutComponent } from './core/layouts/login-layout/login-layout.component';
import { LoginComponent } from './login/login.component';
import { FuncionalidadeLayoutComponent } from './core/layouts/funcionalidade-layout/funcionalidade-layout.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SubMenuComponent } from './sub-menu/sub-menu.component';
import { ListaMembrosComponent } from './membros/lista/lista-membros.component';

const routes: Routes = [{
  component: LoginLayoutComponent,
  path: '',
  children: [{
    component: LoginComponent,
    path: ''
  }]
}, {
  component: FuncionalidadeLayoutComponent,
  path: '',
  children: [{
    component: DashboardComponent,
    path: 'dashboard'
  }, {
    component: SubMenuComponent,
    path: 'submenu'
  }, {
    component: ListaMembrosComponent,
    path: 'lista-membros'
  }]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
