import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalculadoraComponent } from './components'; // Obrigatório em sub-módulos.
import { CalculadoraService } from './services';

@NgModule({
  imports: [CommonModule],
  declarations: [CalculadoraComponent],
  exports: [CalculadoraComponent], // Para o seletor desse component ser reconhecida como uma 'tag html', é preciso exportar o component.
  providers: [CalculadoraService], // Registrando o serviço como um provider, para que ele seja injetado no componente.
})
export class CalculadoraModule {}
