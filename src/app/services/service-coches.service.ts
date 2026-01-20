import { Injectable } from '@angular/core';

export interface Coche {
  marca: string;
  modelo: string;
  ano: number;
}

@Injectable({
  providedIn: 'root'
})
export class ServiceCochesService {

  private coches: Coche[] = [
    { marca: 'Toyota', modelo: 'Corolla', ano: 2020 },
    { marca: 'BMW', modelo: 'Serie 3', ano: 2021 },
    { marca: 'Audi', modelo: 'A4', ano: 2022 }
  ];

  constructor() { }

  // Método para obtener los coches
  getCoches(): Coche[] {
    return this.coches;
  }
}
