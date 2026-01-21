import { Injectable } from '@angular/core';

export interface Coche {
  id: number;
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
    { id:1, marca: 'Rayo', modelo: 'McQueen', ano: 2005, imagen: 'assets/img/coche1.png' },
    { id:2, marca: 'BMW', modelo: 'Serie 3', ano: 2021, imagen: 'assets/img/coche2.png' },
    { id:3, marca: 'Audi', modelo: 'A4', ano: 2022, imagen: 'assets/img/coche3.png' },
    { id:4, marca: 'Ford', modelo: 'Mustang', ano: 2019, imagen: 'assets/img/coche4.png' },
    { id:5, marca: 'Honda', modelo: 'Civic', ano: 2018, imagen: 'assets/img/coche5.png' },
    { id:6, marca: 'Mercedes', modelo: 'C-Class', ano: 2021, imagen: 'assets/img/coche6.png' },
    { id:7, marca: 'Bugatti', modelo: 'Gold', ano: 2020, imagen: 'assets/img/coche7.png' },
    { id:8, marca: 'Tesla', modelo: 'Model 3', ano: 2022, imagen: 'assets/img/coche8.png' },
    { id:9, marca: 'Fernando', modelo: 'Alonso', ano: 2022, imagen: 'assets/img/coche9.png' },
    { id:10, marca: 'Policía', modelo: 'Nacional', ano: 2021, imagen: 'assets/img/coche10.png' }
  ];

  constructor() { }

  getCoches(): Coche[] {
    return this.coches;
  }

  addCoche(marca: string, modelo: string, ano: number, imagen: string){
    const id = this.coches.length > 0 ? Math.max(...this.coches.map(c => c.id)) + 1 : 1;
    const coche: Coche = { id, marca, modelo, ano, imagen };
    this.coches.push(coche);
  }

  deleteCoche(id: number){
    this.coches = this.coches.filter(c => c.id !== id);
  }

  updateCoche(updatedCoche: Coche){
    const index = this.coches.findIndex(c => c.id === updatedCoche.id);
    if(index !== -1){
      this.coches[index] = updatedCoche;
    }
  }
}