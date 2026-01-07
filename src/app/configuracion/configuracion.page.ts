import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonHeader,IonToolbar,IonTitle,IonContent,IonItem,IonLabel,IonToggle } from '@ionic/angular/standalone';
import { CitasService } from '../servicios/cita';

@Component({
selector:'app-configuracion',
templateUrl:'./configuracion.page.html',
styleUrls:['./configuracion.page.scss'],
standalone:true,
imports:[CommonModule,FormsModule,IonHeader,IonToolbar,IonTitle,IonContent,IonItem,IonLabel,IonToggle],
})
export class ConfiguracionPage{

permitirBorrar:boolean=false;

constructor(private citasService:CitasService){
  this.permitirBorrar=this.citasService.getPermitirBorrarInicio();
}

cambiar(){
  this.citasService.setPermitirBorrarInicio(this.permitirBorrar);
}

}
