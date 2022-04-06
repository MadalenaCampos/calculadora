import { Component, OnInit } from '@angular/core';
import { CalculadoraService } from '../services';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.less'],
})
export class CalculadoraComponent implements OnInit {
  constructor(private calculadoraService: CalculadoraService) {}
  // Significa que o typescript criará automaticamente um atributo na classe, chamada calculadoraService.
  // Através do this.calculadoraService, eu consigo acessar os métodos do serviço.

  // Ciclo de vida do angular, ao inicializar. Usado, principalmente, para consultas externas.
  ngOnInit(): void {}
}
