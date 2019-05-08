import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutModule } from '@angular/cdk/layout';
import { FuncionalidadeLayoutComponent } from './funcionalidade-layout.component';
import { RouterModule } from '@angular/router';
import { MatIconModule, MatToolbarModule, MatSidenavModule, MatListModule, MatButtonModule } from '@angular/material';

@NgModule({
  declarations: [FuncionalidadeLayoutComponent],
  imports: [
    CommonModule,
    LayoutModule,
    RouterModule,
    MatIconModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatButtonModule
  ]
})
export class FuncionalidadeLayoutModule { }
