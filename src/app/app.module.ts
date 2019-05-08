import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginLayoutModule } from './core/layouts/login-layout/login-layout.module';
import { LoginModule } from './login/login.module';
import { FuncionalidadeLayoutModule } from './core/layouts/funcionalidade-layout/funcionalidade-layout.module';
import { DashboardModule } from './dashboard/dashboard.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    LoginLayoutModule,
    LoginModule,
    FuncionalidadeLayoutModule,
    DashboardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
