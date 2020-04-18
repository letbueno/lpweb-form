import { Component } from '@angular/core';
import { Turma } from './turmas';

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
  turmasSelect = null;
  ufSelect = null;
  turmas: Array<Turma> = [
    new Turma(1,'LPWEB'),
    new Turma(2,'AP2')


];
alunos = [];


  uf = ['AC','AL','AP','AM','BA','DF','CE','ES','GO','MA','MT','MS','MG','PA','PB','PR','PE','PI','RJ','RN','RS','RO','RR','SC','SP','SE'
  ];



cadastrar(){

  const ano = this.data;
  const anomesmo = ano.split('-');
  const year = anomesmo[0];
  const dataHoje = new Date().getFullYear();
  const idade = dataHoje-year;


    this.alunos.push({nome:this.nome, idade:idade, sexo:this.sexo, cpf: this.cpf, email:this.email, telefone: this.telefone, endereco: this.endereco,cep: this.cep
    ,cidade: this.cidade, uf: this.ufSelect, documentos: this.documentos, turma: this.turmasSelect})




}
limpaFormulario(){
  this.nome = null;
  this.data = null;
  this.sexo = null;
  this.cpf = null;
  this.email = null;
  this.endereco = null;
  this.cep = null;
  this.cidade = null;
  this.documentos = null;
  this.turmasSelect = null;
  this.ufSelect = null;
  this.telefone = null;
}
}
