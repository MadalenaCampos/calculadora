import { Component, OnInit } from '@angular/core';
import { CalculadoraService } from '../services';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.less'],
})
export class CalculadoraComponent implements OnInit {
  // Atributos privados => não podem ser acessados fora dessa classe.
  private numero1!: string;
  private numero2!: string;
  private resultado!: number;
  private operacao!: string;

  constructor(private calculadoraService: CalculadoraService) {}
  // Significa que o typescript criará automaticamente um atributo na classe, chamada calculadoraService.
  // Através do this.calculadoraService, eu consigo acessar os métodos do serviço.

  // Ciclo de vida do angular, ao inicializar. Usado, principalmente, para consultas externas.
  ngOnInit(): void {
    this.limpar();
  }

  limpar(): void {
    this.numero1 = '0';
    this.numero2 = null;
    this.resultado = null;
    this.operacao = null;
  } // Irá zerar os valores dos atributos.

  adicionarNumero(numero: string): void {
    if (this.operacao === null) {
      this.numero1 = this.concatenarNumero(this.numero1, numero);
    } else {
      this.numero2 = this.concatenarNumero(this.numero2, numero);
    }
  } // Irá adicionar o número ao atributo numero1 ou numero2.

  concatenarNumero(numAtual: string, numConcat: string): string {
    if (numAtual === '0' || numAtual === null) {
      numAtual = '';
    } // Se o número atual for 0 ou null, o número atual será vazio.

    if (numConcat === '.' && numAtual === '') {
      numAtual = '0.';
    } // Se o número concatenado for um ponto e o número atual for vazio, o primeiro número será 0 ==> ex.: 0.1

    if (numConcat === '.' && numAtual.indexOf('.') > -1) {
      return numAtual;
    } // Se o número concatenado for um ponto e o número atual já tiver um ponto, o número concatenado não será adicionado. Pois não pode ter dois pontos.

    return numAtual + numConcat;
  }

  definirOperacao(operacao: string): void {
    if (this.operacao === null) {
      this.operacao = operacao;
      return;
    } // Se a operação for nula, a operação será definida.

    if (this.numero2 !== null) {
      this.resultado = this.calculadoraService.calcular(
        parseFloat(this.numero1),
        parseFloat(this.numero2),
        this.operacao
      );
      this.operacao = operacao;
      this.numero1 = this.resultado.toString();
      this.numero2 = null;
      this.resultado = null;
    } // Se ele possui os 2 números e a operação, o resultado será calculado.
  }

  calcular(): void {
    if (this.numero2 === null) {
      return;
    } // Se não tiver o segundo número, não faz nada se apertar o igual.

    this.resultado = this.calculadoraService.calcular(
      parseFloat(this.numero1),
      parseFloat(this.numero2),
      this.operacao
    ); // Calcula o resultado.
  }

  get display(): string {
    // get display => convenção do typescript, que gera um atributo de classe chamado display, e cria um getter para acessar esse atributo.
    if (this.resultado !== null) {
      return this.resultado.toString();
    }
    if (this.numero2 !== null) {
      return this.numero2;
    }
    return this.numero1;
  } // Retorna o número que será exibido na tela.
}
