import { Dados } from './../crud/dados';
import { CrudService } from './../crud/crud.service';
import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']

})
export class CadastroComponent implements OnInit {

  titulo = '';
  dados: any = {};
  meuForm: FormGroup;


  constructor(

    private servico: CrudService,
    @Inject(FormBuilder) fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router

  ) {

    this.meuForm = fb.group({
      nome: ['', [Validators.required, Validators.minLength(2)]],
      genero: [],
      cpf: [],
      email: ['', [Validators.email, Validators.required]]
    });

  }

  ngOnInit() {
    const dadosId = Number(this.route.snapshot.params['id']);

    if (dadosId) {
      this.titulo = 'Aterar Dados';
      this.dados = this.servico.getById(dadosId);
    } else {

      this.titulo = 'Inserir Dados';
      this.dados = new Dados();

    }

  }

  salvarDados() {
    this.servico.salvar(this.dados);
    this.router.navigate(['listar']);
  }




}
