import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() {
    
    var media = 6
var nota01: any = (prompt("Qual foi sua primeira nota"))
var nota02: any = (prompt("Qual foi sua segunda nota"))

var soma = (nota01 + nota02)/2

if(soma >= media){
alert('Aluno APROVADO ')
}
else{
alert('Aluno REPROVADO')
}
  }

  ngOnInit(): void {
  }

}
