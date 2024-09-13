import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { ServiceService } from '../../servicio/service.service';
import { Empleado } from '../../empleado';
import { catchError, of, Subscriber, tap } from 'rxjs';
import swal from 'sweetalert2';
import { FormsModule } from '@angular/forms';

@Component({
  standalone: true,
  imports: [RouterModule, FormsModule],
  templateUrl: './actualizarempleados.component.html',
  styles: ``
})
export default class ActualizarempleadosComponent implements OnInit {

  id:number
  empleado:Empleado

  constructor(private router: ActivatedRoute, private serviceService : ServiceService){

  }

  ngOnInit(): void {
    this.id = this.router.snapshot.params['id']
    this.empleado = new Empleado()
    this.serviceService.obtenerEmpleadoPorId(this.id).subscribe(data =>{
      this.empleado = data
    });
  }

  actualizarEmppleado(){
    if (this.empleado) {
      this.serviceService.actualizarEmpleado(this.id, this.empleado).pipe(
        tap(dato => {
          console.log(dato)
          this.irAlaListaDeEmpleados();
        }),
        catchError(error => {
          console.error('Error al actualizar el empleado:', error);
          return of(null); // Retorna un observable vacío en caso de error
        })
      ).subscribe(); // Realiza la suscripción
    }
  }

  irAlaListaDeEmpleados() {
    swal('Empleado actualizado', `El empleado ${this.empleado.nombre} ha sido actualizado con exito`, `success`);
  }

}
