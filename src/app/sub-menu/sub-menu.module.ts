import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubMenuComponent } from './sub-menu.component';
import { MatButtonModule, MatCardModule, MatMenuModule, MatIconModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [SubMenuComponent],
  imports: [
    CommonModule,
    MatButtonModule,
    MatCardModule,
    MatMenuModule,
    MatIconModule,
    FlexLayoutModule,
    RouterModule
  ]
})
export class SubMenuModule { }
