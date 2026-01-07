import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButton, IonInput, IonList, IonItem, IonLabel, IonIcon } from '@ionic/angular/standalone';
import { CitasService, Cita } from '../servicios/cita';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-gestion-citas',
  templateUrl: './gestion-citas.page.html',
  styleUrls: ['./gestion-citas.page.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, IonContent, IonHeader, IonTitle, IonToolbar, IonButton, IonInput, IonList, IonItem, IonLabel, IonIcon]
})
export class GestionCitasPage {

  texto: string = '';
  autor: string = '';

  constructor(public citasService: CitasService) {}

  // Validaciones simples como propiedades
  get textoInvalido(): boolean {
    return this.texto.length > 0 && this.texto.length < 5;
  }

  get autorInvalido(): boolean {
    return this.autor.length > 0 && this.autor.length < 2;
  }

  agregarCita() {
    if (!this.textoInvalido && !this.autorInvalido && this.texto && this.autor) {
      this.citasService.agregarCita({ texto: this.texto, autor: this.autor });
      this.texto = '';
      this.autor = '';
    }
  }

  eliminarCita(index: number) {
    this.citasService.eliminarCita(index);
  }
}
