import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginLayoutModule } from './core/layouts/login-layout/login-layout.module';
import { LoginModule } from './login/login.module';
import { FuncionalidadeLayoutModule } from './core/layouts/funcionalidade-layout/funcionalidade-layout.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { SubMenuModule } from './sub-menu/sub-menu.module';
import { ListaMembrosModule } from './membros/lista/lista-membros.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    LoginLayoutModule,
    LoginModule,
    FuncionalidadeLayoutModule,
    DashboardModule,
    SubMenuModule,
    ListaMembrosModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
