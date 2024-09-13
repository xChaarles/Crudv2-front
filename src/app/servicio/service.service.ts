import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Empleado } from '../empleado';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  //url obtiene listado de empleados del backend
  private api = "http://localhost:8080/api/v1/empleados";

  constructor( private http : HttpClient ) { }

  //Este metodo nos va traer el listado de los empleados que estan en la base de datos del bakend
  listaEmpleados(): Observable<Empleado[]>{
    return this.http.get<Empleado[]>(`${this.api}`);
  }

  //Este metodo se creo para agregar un nuevo empleado y enviarlo al bakend
  addEmpleado(empleado:Empleado): Observable<Object>{
    return this.http.post(`${this.api}`, empleado)
  }

  elimnarEmpleado(id : number): Observable<Object>{
    return this.http.delete(`${this.api}/${id}`)
  }

}
