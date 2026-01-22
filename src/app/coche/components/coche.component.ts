import { Component, OnInit } from '@angular/core';
import { ServiceCochesService, Coche } from '../services/service-coches.service';

@Component({
  selector: 'app-coche',
  templateUrl: './coche.component.html',
  styleUrls: ['./coche.component.css']
})
export class CocheComponent implements OnInit {

  coches: Coche[] = [];

  marca = '';
  modelo = '';
  ano = 0;
  imagen = '';

  editMode = false;
  editId: number | null = null;

  constructor(private cocheService: ServiceCochesService) {}

  ngOnInit(): void {
    this.coches = this.cocheService.getCoches();
  }

  addCoche() {
    if (this.marca.length > 2 && this.modelo.length > 2 && this.ano > 1900) {
      if (this.editMode && this.editId !== null) {
        this.cocheService.updateCoche({
          id: this.editId,
          marca: this.marca,
          modelo: this.modelo,
          ano: this.ano,
          imagen: this.imagen
        });
        this.editMode = false;
        this.editId = null;
      } else {
        this.cocheService.addCoche(this.marca, this.modelo, this.ano, this.imagen);
      }

      this.coches = this.cocheService.getCoches();
      this.resetForm();
    }
  }

  editCoche(coche: Coche) {
    this.editMode = true;
    this.editId = coche.id;
    this.marca = coche.marca;
    this.modelo = coche.modelo;
    this.ano = coche.ano;
    this.imagen = coche.imagen;
  }

  deleteCoche(id: number) {
    this.cocheService.deleteCoche(id);
    this.coches = this.cocheService.getCoches();
  }

  resetForm() {
    this.marca = '';
    this.modelo = '';
    this.ano = 0;
    this.imagen = '';
  }
}
