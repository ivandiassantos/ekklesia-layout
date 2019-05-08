import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { MatGridListModule, MatCardModule, MatMenuModule, MatIconModule, MatButtonModule } from '@angular/material';

@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    MatGridListModule, 
    MatCardModule, 
    MatMenuModule, 
    MatIconModule, 
    MatButtonModule
  ]
})
export class DashboardModule { }
