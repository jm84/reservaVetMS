import { Component, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-seleccionar-medico',
  templateUrl: './seleccionar-medico.component.html',
  styleUrls: ['./seleccionar-medico.component.css'],
})
export class SeleccionarMedicoComponent implements OnChanges {
  @Input()
  especialidadId!: number;
  medicos: any[] = [
    {
      id: 1,
      nombre: 'Dr. Juan Pérez',
      especialidad: 'Cardiología',
      foto: 'ruta/a/foto1.jpg',
    },
    {
      id: 2,
      nombre: 'Dra. María López',
      especialidad: 'Endocrinología',
      foto: 'ruta/a/foto2.jpg',
    },
  ];

  constructor() {}

  ngOnChanges(): void {
    // Lógica para cargar los médicos según la especialidad seleccionada
  }

  verDisponibilidad(medicoId: number): void {
    // Lógica para ver la disponibilidad del médico
  }
}
