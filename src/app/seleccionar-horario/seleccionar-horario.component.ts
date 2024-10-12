import { Component, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-seleccionar-horario',
  templateUrl: './seleccionar-horario.component.html',
  styleUrls: ['./seleccionar-horario.component.css'],
})
export class SeleccionarHorarioComponent implements OnChanges {
  @Input()
  medicoId!: number;
  horarios: any[] = [
    { id: 1, hora: '09:00' },
    { id: 2, hora: '09:30' },
    { id: 3, hora: '10:00' },
    { id: 4, hora: '10:30' },
  ];
  horarioSeleccionado!: number;

  constructor() {}

  ngOnChanges(): void {
    // Lógica para cargar los horarios disponibles según el médico seleccionado
  }

  seleccionarHorario(horarioId: number): void {
    this.horarioSeleccionado = horarioId;
  }

  confirmarReserva(): void {
    // Lógica para confirmar la reserva
  }
}
