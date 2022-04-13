import { Injectable } from '@angular/core';

// O Injectable, é o que o faz ser um serviço, que será consumido pelo componente.
@Injectable({
  providedIn: 'root',
})
export class CalculadoraService {
  // Criação de constantes para representar as operações, já que os mesmos são usados diversas vezes.
  static readonly SOMA: string = '+';
  static readonly SUBTRACAO: string = '-';
  static readonly DIVISAO: string = '/';
  static readonly MULTIPLICACAO: string = '*';
  // static => facilita o acesso ao atributo, permitindo chamar a classe, sem uma instancia dela.
  // readonly => somente leitura.

  constructor() {}

  public calcular(num1: number, num2: number, operacao: string): number {
    // :number => retorno da função.

    let resultado: number;
    // Armazena o resultado da operação.
    // let => variável local.

    switch (operacao) {
      // switch => faz a comparação com o valor da variável.

      case CalculadoraService.SOMA:
        // case => caso a condição seja verdadeira, executa o código.

        resultado = num1 + num2;
        break; // break => finaliza o switch.

      case CalculadoraService.SUBTRACAO:
        resultado = num1 - num2;
        break;

      case CalculadoraService.DIVISAO:
        resultado = num1 / num2;
        break;
      case CalculadoraService.MULTIPLICACAO:
        resultado = num1 * num2;
        break;

      default:
        resultado = 0;
      // Caso nenhuma das condições seja verdadeira, o retorno será 0.
    }

    return resultado;
  }
}

// Regras de negócios e servidores externos(API).
