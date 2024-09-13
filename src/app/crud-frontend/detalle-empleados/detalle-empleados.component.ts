import { Component, OnInit } from '@angular/core';
import { Empleado } from '../../empleado';
import { ActivatedRoute, Router } from '@angular/router';
import { ServiceService } from '../../servicio/service.service';

@Component({
  standalone: true,
  imports: [],
  templateUrl: './detalle-empleados.component.html',
  styles: ``
})
export default class DetalleEmpleadosComponent implements OnInit {

  id:number;
  empleado:Empleado

  constructor(private route:ActivatedRoute, private serviceService : ServiceService){

  }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id']
    this.empleado = new Empleado();
    this.serviceService.obtenerEmpleadoPorId(this.id).subscribe ( dato => {
      this.empleado = dato;
    })
  }

}
