import { Component, OnInit } from '@angular/core';
import { ServiceCochesService, Coche } from '../../services/service-coches.service';

@Component({
  selector: 'app-coche',
  templateUrl: './coche.component.html',
  styleUrls: ['./coche.component.css']
})
export class CocheComponent implements OnInit {

  coches: Coche[] = [];

  constructor(private cocheService: ServiceCochesService) { }

  ngOnInit(): void {
    this.coches = this.cocheService.getCoches();
  }

}
