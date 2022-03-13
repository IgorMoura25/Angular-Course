import { Component } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html'
})
export class DataBindingComponent {
  public contadorClique: number = 0;
  public nome: string = "";

  adicionarClique() {
    this.contadorClique++;
  };

  KeyUp(event: any) {
    this.nome = event.target.value;
  };
}
