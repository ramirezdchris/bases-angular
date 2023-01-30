import { Component } from '@angular/core';

@Component({
  selector: 'app-contador',
  template: `
    <h1>{{ title }}</h1>
    <h3>La base es {{ base }}</h3>

    <button (click)="acumular(-base)">- {{ base }}</button>

    <span> {{ numeroBase }} </span>

    <button (click)="acumular(base)">+ {{ base }}</button>
  `,
})
export class ContadorComponent {

  title = 'Contador APP';
  numero: number = 10;
  base: number = 5;
  numeroBase: number = 10;

  acumular(valor: number): void{
    this.numeroBase += valor;
  }

}
