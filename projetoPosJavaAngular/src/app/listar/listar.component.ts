import { CrudService } from './../crud/crud.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {

  dados: any = {};

  constructor(
    private servico: CrudService,
  ) { }

  ngOnInit() {
    this.dados = this.servico.getDados();
  }

}
