import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FuncionalidadeLayoutComponent } from './funcionalidade-layout.component';
import { RouterModule } from '@angular/router';
import { MatIconModule, MatToolbarModule, MatSidenavModule, MatListModule, MatButtonModule, MatMenuModule, MatBadgeModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [FuncionalidadeLayoutComponent],
  imports: [
    CommonModule,
    FlexLayoutModule,
    RouterModule,
    MatIconModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatButtonModule,
    MatMenuModule,
    MatBadgeModule
  ]
})
export class FuncionalidadeLayoutModule { }
