import { Component, Input} from '@angular/core';

@Component({
  selector: 'app-tarjetas',
  templateUrl: './tarjetas.component.html',
  styleUrls: ['./tarjetas.component.css']
})
export class TarjetasComponent {

  //Recibo la información
@Input() items: any []=[];

  constructor() { }

}
