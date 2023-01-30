import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent  {

  heroes: string [] = ['Spider', 'Cap Amrica', 'IronMan', 'Thor'];
  heroeBorrado: string;

  constructor () {
    this.heroeBorrado = '';
    console.log(this.heroes);
  }

  borrarHeroe(){
    //this.heroes = this.heroes.splice(0,0);
    //console.log(this.heroes);
    this.heroeBorrado = this.heroes.shift() || '';
  }

}
