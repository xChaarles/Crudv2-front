import { Component, OnInit } from '@angular/core';
import { Empleado } from '../../empleado';
import { ServiceService } from '../../servicio/service.service';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';


@Component({
  standalone: true,
  imports: [FormsModule, RouterModule],
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

  eliminarEmpleado(id:number){
    this.serviceServicio.elimnarEmpleado(id).subscribe(dato=>{
      console.log(dato)
      this.ObtenerEmpleados();
    });
  }
}
