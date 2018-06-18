import { Injectable } from '@angular/core';
import { Dados } from './dados';

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  constructor() { }

  private setDados(dados: any[]) {
    localStorage.setItem('chavesdados', JSON.stringify(dados));
  }

  public getDados(): any[] {
    if (!localStorage.getItem('chavesdados')) {
      localStorage.setItem('chavesdados', JSON.stringify([]));
    }
    return JSON.parse(localStorage.getItem('chavesdados'));
  }

  salvar(dado: Dados) {

    const  arrayDados = this.getDados();

    if (dado.id) {
      for (let i = 0; i <= arrayDados.length; i++) {
        if (arrayDados[i].id === dado.id) {
          arrayDados[i] = dado;
          break;
        }
      }

    } else {
      const ultimoIndice = arrayDados[arrayDados.length - 1] || { id: 0 };
      dado.id = ultimoIndice.id + 1;
      arrayDados.push(dado);
    }
    return this.setDados(arrayDados);
  }

  getById(id: Number) {
    /* return this.getDados().find(dados => dados.id === id) */
    return this.getDados().find(function(dados) {
      return dados.id === id;
    });
  }




}
