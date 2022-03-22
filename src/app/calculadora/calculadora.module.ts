import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalculadoraComponent } from './components'; // Obrigatório em sub-módulos.

@NgModule({
  imports: [CommonModule],
  declarations: [CalculadoraComponent],
  exports: [CalculadoraComponent], // Para o seletor desse component ser reconhecida como uma 'tag html', é preciso exportar o component.
})
export class CalculadoraModule {}
