import { Component, OnInit } from '@angular/core';
import { Empleado } from '../../empleado';
import { ServiceService } from '../../servicio/service.service';


@Component({
  standalone: true,
  imports: [],
  templateUrl: './lista-empleados.component.html',
  styles: ``
})
export default class ListaEmpleadosComponent implements OnInit {

  empleados : Empleado[] = [];

  constructor(private serviceServicio:ServiceService){

  }
ngOnInit(): void {
  this.ObtenerEmpleados()
}

  ObtenerEmpleados(){
    this.serviceServicio.listaEmpleados().subscribe(
      dato => {
        this.empleados = dato
      });
  }

  deleteCustomer(){

  }

}
