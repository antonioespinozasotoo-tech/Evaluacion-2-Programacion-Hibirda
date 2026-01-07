import { Component, Input, Output, EventEmitter } from '@angular/core';
import { IonCard, IonCardContent, IonButton } from '@ionic/angular/standalone';
import { Cita } from '../servicios/cita';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cita',
  standalone: true,
  templateUrl: './cita.component.html',
  imports: [CommonModule,IonCard, IonCardContent, IonButton]
})
export class CitaComponent {
  @Input() cita!: Cita;
  @Input() permitirBorrar = false;

  @Output() borrar = new EventEmitter<void>();

  solicitarBorrado(): void {
    this.borrar.emit();
  }
}