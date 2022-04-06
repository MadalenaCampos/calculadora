import { Injectable } from '@angular/core';

// O Injectable, é o que o faz ser um serviço, que será consumido pelo componente.
@Injectable({
  providedIn: 'root',
})
export class CalculadoraService {
  constructor() {}
}

// Regras de negócios e servidores externos(API).
