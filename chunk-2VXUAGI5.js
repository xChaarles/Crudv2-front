import{a as b}from"./chunk-LLDYPSUK.js";import{a as u}from"./chunk-KB226TBG.js";import{C as a,D as d,M as i,N as t,S as e,T as o,V as c,_ as v,la as f,s}from"./chunk-G56N656Z.js";var r=class p{constructor(m,l){this.route=m;this.serviceService=l}id;empleado;ngOnInit(){this.id=this.route.snapshot.params.id,this.empleado=new b,this.serviceService.obtenerEmpleadoPorId(this.id).subscribe(m=>{this.empleado=m})}static \u0275fac=function(l){return new(l||p)(d(f),d(u))};static \u0275cmp=s({type:p,selectors:[["ng-component"]],standalone:!0,features:[v],decls:28,vars:6,consts:[[1,"pt-20"],[1,"flex","flex-col","items-center","pt-32","dark:text-white","pb-14"],[1,"flex","flex-col"],[1,""]],template:function(l,n){l&1&&(i(0,"section",0)(1,"div",1)(2,"h1"),e(3,"Detealle de "),i(4,"b"),e(5),t()(),i(6,"div")(7,"div",2)(8,"div",3)(9,"label"),e(10,"ID: "),i(11,"b"),e(12),t()()(),i(13,"div",3)(14,"label")(15,"b"),e(16,"Nombre: "),t(),e(17),t()(),i(18,"div",3)(19,"label")(20,"b"),e(21,"Apellido: "),t(),e(22),t()(),i(23,"div",3)(24,"label")(25,"b"),e(26,"Email: "),t(),e(27),t()()()()()()),l&2&&(a(5),c("",n.empleado.nombre," ",n.empleado.apellido,""),a(7),o(n.empleado.id),a(5),o(n.empleado.nombre),a(5),o(n.empleado.apellido),a(5),o(n.empleado.email))}})};export{r as default};
