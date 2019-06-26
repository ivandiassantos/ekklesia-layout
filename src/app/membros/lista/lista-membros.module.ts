import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListaMembrosComponent } from './lista-membros.component';
import { MatCardModule, MatTableModule, MatPaginatorModule, MatSortModule, MatFormFieldModule, MatInputModule, MatButtonModule, MatMenuModule, MatIconModule, MatTooltipModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [ListaMembrosComponent],
  imports: [
    CommonModule,
    MatCardModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatFormFieldModule,
    MatInputModule,
    FlexLayoutModule,
    MatButtonModule,
    MatMenuModule,
    MatIconModule,
    MatTooltipModule
  ]
})
export class ListaMembrosModule { }
