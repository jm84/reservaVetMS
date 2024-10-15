import { Component, Input, OnChanges } from '@angular/core';
import { EspecialidadesService } from '../service/especialidades.service';
import { tap, catchError } from 'rxjs/operators';
import { of } from 'rxjs';
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
  filteredMedicos: any[] = [];

  // ngOnChanges(): void {
  //   this.filteredMedicos = this.medicos.filter(
  //     (medico) =>
  //       medico.especialidad === this.getEspecialidadById(this.especialidadId)
  //   );
  // }

  constructor(private medicoService: EspecialidadesService) {}

  ngOnChanges(): void {
    if (this.especialidadId) {
      this.medicoService
        .getMedicosByEspecialidad(this.especialidadId)
        .pipe(
          tap((medicos) => {
            this.filteredMedicos = medicos;
          }),
          catchError((error) => {
            console.error('Error fetching medicos:', error);
            return of([]); // Devuelve un array vacío en caso de error
          })
        )
        .subscribe();
    }
  }

  verDisponibilidad(medicoId: number): void {
    // Lógica para ver la disponibilidad del médico
  }

  private getEspecialidadById(id: number): string {
    const especialidades: { [key: number]: string } = {
      1: 'Cardiología',
      2: 'Endocrinología',
      // Add other specialties here
    };
    return especialidades[id] || '';
  }
}
