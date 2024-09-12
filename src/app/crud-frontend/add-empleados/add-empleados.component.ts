import { Component, OnInit } from '@angular/core';
import { Empleado } from '../../empleado';
import { Router, RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import Swal from 'sweetalert2';
import { ServiceService } from '../../servicio/service.service';
import { catchError, tap, throwError } from 'rxjs';

@Component({
  standalone: true,
  imports: [FormsModule, RouterModule],
  templateUrl: './add-empleados.component.html',
  styles: ``
})
export default class AddEmpleadosComponent implements OnInit {

  empleado : Empleado = new Empleado();

  constructor(private router :Router, private serviceService : ServiceService){

  }
  ngOnInit(): void {
  }

  agregarEmpleado(){
    this.serviceService.addEmpleado(this.empleado).pipe(
      tap(dato => {
        console.log(dato);
        this.irListaEmpleados();
      }),
      catchError(error => {
        console.log(error);
        return throwError(() => new Error(error));
      })
    ).subscribe();
  }

  irListaEmpleados(){
    Swal('Empleado registrado', `El empleado ${this.empleado.nombre} ha sido registrado con exito`, `success`);
   }

   onSubmit(){
    this.agregarEmpleado();
   }
}

