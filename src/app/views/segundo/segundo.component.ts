import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Persona } from '../models/Persona';

@Component({
  selector: 'app-segundo',
  templateUrl: './segundo.component.html',
  styleUrls: ['./segundo.component.css']
})
export class SegundoComponent implements OnInit {

  _contenido: any;
  @Input('llegada')
  set contenido(value:any){
    this._contenido = value;
    if(value == "hola"){
      setTimeout(() => {
        alert("Te estan saludando");
      }, 1500);
    }
  }
  get contenido(){
    return this._contenido
  }
  @Output() enviarPais = new EventEmitter();
  //@Input() contenido;
  enviar(event){
    this.enviarPais.emit("Colombia");
  }

  persona:Persona = new Persona();

  @Output() enviarPersona = new EventEmitter();
  

  emitirPersona(){
    let miPersona = JSON.parse(JSON.stringify(this.persona)) ;
    this.enviarPersona.emit(miPersona);
  }
  constructor() { }

  ngOnInit() {
  }

}
