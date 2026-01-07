import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import {
  IonButton,
  IonButtons,
  IonContent,
  IonFab,
  IonFabButton,
  IonHeader,
  IonIcon,
  IonTitle,
  IonToolbar
} from '@ionic/angular/standalone';

import { CitaComponent } from '../cita/cita.component';
import { CitasService, Cita } from '../servicios/cita';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    CitaComponent,
    IonButton,
    IonButtons,
    IonContent,
    IonFab,
    IonFabButton,
    IonHeader,
    IonIcon,
    IonTitle,
    IonToolbar
  ],
})
export class HomePage implements OnInit {

  citaActual!: Cita;

  constructor(
    private citasService: CitasService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.cargarCita();
  }

  ionViewWillEnter(): void {
    this.cargarCita();
  }

  cargarCita(): void {
    this.citaActual = this.citasService.getCitaAleatoria();
  }

  borrarCita(): void {
    this.cargarCita();
  }

  puedeBorrar(): boolean {
    return this.citasService.getPermitirBorrarInicio();
  }

  // 🔹 Navegar a gestión de citas
  irGestionCitas(): void {
    this.router.navigate(['/gestion-citas']);
  }

  // 🔹 Navegar a configuración
  irConfiguracion(): void {
    this.router.navigate(['/configuracion']);
  }
}
