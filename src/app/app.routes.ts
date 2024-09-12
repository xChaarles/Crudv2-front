import { Routes } from '@angular/router';

export const routes: Routes = [

    {
    path: 'crud-frontend',
    loadComponent: () => import('./crud-frontend/crud-frontend.component'),
    children:[
            {
                path: 'lista-empleados',
                title: 'Lista Empleados',
                loadComponent: () => import("./crud-frontend/lista-empleados/lista-empleados.component"),
            },
            {
                path: 'add-empleados',
                title: 'Crear Clientes',
                loadComponent: () => import("./crud-frontend/add-empleados/add-empleados.component"),
            },
            {
                path:'', 
                redirectTo: 'lista-empleados',
                pathMatch:'full',
            }
        ]
    },
    {
        path: '',
        redirectTo: 'crud-frontend',
        pathMatch: 'full'
    },

];
