import { Component } from '@angular/core';
import {Turma } from './turmas';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'cadastro';
  nome = null;
  data = null;
  sexo = null;
  cpf = null;
  email = null;
  telefone = null;
  endereco = null;
  cep = null;
  cidade = null;
  documentos = null;
  turmas: Array<Turma> = [
    new Turma(1,'LPWEB'),
    new Turma(2,'AP2')


];


  uf = ['AC','AL','AP','AM','BA','DF','CE','ES','GO','MA','MT','MS','MG','PA','PB','PR','PE','PI','RJ','RN','RS','RO','RR','SC','SP','SE'
  ];
}


