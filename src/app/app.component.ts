import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html', // Ruta del archivo HTML donde se muestra la informacion
  //template: '<span>Christian</span>', // Basicamente es una parte de HTML para poder mostrar
  //template: `
  //  <h1>Hola mundo</h1>
  //`, //Basicamente es una parte de HTML para poder mostrar Recomendable 3 lienas

})
export class AppComponent {
  title = 'Contador APP';

  numero: number = 10;

  base: number = 5;
  numeroBase: number = 10;

  increment(): number{
    return this.numero += 1;
  }

  decrement(): number {
    return this.numero += 1;
  }

  acumular(valor: number): void{
    this.numeroBase += valor;
  }
}
