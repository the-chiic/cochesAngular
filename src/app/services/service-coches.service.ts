import { Injectable } from '@angular/core';

export interface Coche {
  marca: string;
  modelo: string;
  ano: number;
  imagen: string;
}

@Injectable({
  providedIn: 'root'
})
export class ServiceCochesService {

  private coches: Coche[] = [
    { marca: 'Rayo', modelo: 'McQueen', ano: 2005, imagen: 'assets/img/coche1.png' },
    { marca: 'BMW', modelo: 'Serie 3', ano: 2021, imagen: 'assets/img/coche2.png' },
    { marca: 'Audi', modelo: 'A4', ano: 2022, imagen: 'assets/img/coche3.png' },
    { marca: 'Ford', modelo: 'Mustang', ano: 2019, imagen: 'assets/img/coche4.png' },
    { marca: 'Honda', modelo: 'Civic', ano: 2018, imagen: 'assets/img/coche5.png' },
    { marca: 'Mercedes', modelo: 'C-Class', ano: 2021, imagen: 'assets/img/coche6.png' },
    { marca: 'Bugatti', modelo: 'Gold', ano: 2020, imagen: 'assets/img/coche7.png' },
    { marca: 'Tesla', modelo: 'Model 3', ano: 2022, imagen: 'assets/img/coche8.png' },
    { marca: 'Fernando', modelo: 'Alonso', ano: 2022, imagen: 'assets/img/coche9.png' },
    { marca: 'Policía', modelo: 'Nacional', ano: 2021, imagen: 'assets/img/coche10.png' }
  ];

  constructor() { }

  getCoches(): Coche[] {
    return this.coches;
  }
}
