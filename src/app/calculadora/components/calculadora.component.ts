import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.less'],
})
export class CalculadoraComponent implements OnInit {
  constructor() {}

  // Cíclo de vida do angular, ao inicializar. Usado, principalmente, para consultas externas.
  ngOnInit(): void {}
}
