import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';

export interface Membro {
  id:string
  nome: string;
}

const NOMES: string[] = [
  'Maia', 'Asher', 'Olivia', 'Atticus', 'Amelia', 'Jack', 'Charlotte', 'Theodore', 'Isla', 'Oliver',
  'Isabella', 'Jasper', 'Cora', 'Levi', 'Violet', 'Arthur', 'Mia', 'Thomas', 'Elizabeth'
];

@Component({
  selector: 'app-lista-membros',
  templateUrl: './lista-membros.component.html',
  styleUrls: ['./lista-membros.component.css']
})
export class ListaMembrosComponent implements OnInit {

  colunas: string[] = ['nome','acoes'];
  membrosDataSource: MatTableDataSource<Membro>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor() {
    const membros = Array.from({ length: 100 }, (_, k) => criaMembros(k + 1));

    // Assign the data to the data source for the table to render
    this.membrosDataSource = new MatTableDataSource(membros);
  }

  ngOnInit() {
    this.membrosDataSource.paginator = this.paginator;
    this.membrosDataSource.sort = this.sort;
  }

  applyFilter(filterValue: string) {
    this.membrosDataSource.filter = filterValue.trim().toLowerCase();

    if (this.membrosDataSource.paginator) {
      this.membrosDataSource.paginator.firstPage();
    }
  }

}

function criaMembros(id: number): Membro {
  const nome = NOMES[Math.round(Math.random() * (NOMES.length - 1))] + ' ' +
    NOMES[Math.round(Math.random() * (NOMES.length - 1))].charAt(0) + '.';

  return {
    id: id.toString(),
    nome: nome
  };
}
