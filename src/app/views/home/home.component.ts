import { Component, OnInit } from '@angular/core';
import { Persona } from '../models/Persona';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  titulo = 'Home Component';
  listaNombres = [
    {
      nombre: 'El Zamora',
      genero: 'M'
    },
    {
      nombre: 'Natalia',
      genero: 'F'
    },
    {
      nombre: 'Cielo Santo',
      genero: 'O'
    }
    ];

    listaPersonas = new Array<Persona>();
  constructor() { }

  ngOnInit() {
  }
  quePais(event) {
    console.log(event);
  }
  personaRecibida(event) {
   this.listaPersonas.push(event);
   console.log(event);
  }

}
