import { Injectable } from '@angular/core';

export interface Cita{
  texto:string;
  autor:string;
}

@Injectable({
  providedIn:'root'
})
export class CitasService{

  private permitirBorrarInicio:boolean=false;

  private citas:Cita[]=[
    {texto:'El éxito consiste en obtener lo que se desea. La felicidad es disfrutar lo que se obtiene.',autor:'Ralph Waldo Emerson'},
    {texto:'Las personas no son recordadas por el número de veces que fracasan, sino por el número de veces que tienen éxito.',autor:'Thomas Edison'},
    {texto:'Ningún viento es favorable para el que no sabe a dónde va.',autor:'Séneca'}
  ];

  getCitas():Cita[]{
    return this.citas;
  }

  getCitaAleatoria():Cita{
    const index=Math.floor(Math.random()*this.citas.length);
    return this.citas[index];
  }

  agregarCita(cita:Cita):void{
    this.citas.push(cita);
  }

  eliminarCita(index:number):void{
    this.citas.splice(index,1);
  }

  setPermitirBorrarInicio(valor:boolean):void{
    this.permitirBorrarInicio=valor;
  }

  getPermitirBorrarInicio():boolean{
    return this.permitirBorrarInicio;
  }
}
