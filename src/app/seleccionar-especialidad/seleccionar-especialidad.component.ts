import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { EspecialidadesService } from '../service/especialidades.service';

@Component({
  selector: 'app-seleccionar-especialidad',
  templateUrl: './seleccionar-especialidad.component.html',
  styleUrls: ['./seleccionar-especialidad.component.css']
})
export class SeleccionarEspecialidadComponent implements OnInit {
  especialidades: any[] = [];
  selectedEspecialidad: string | undefined;

  constructor(private especialidadesService: EspecialidadesService, private router: Router) {}

  ngOnInit(): void {
    this.cargarEspecialidades();
  }

  cargarEspecialidades(): void {
    this.especialidadesService.getEspecialidades().subscribe(data => {
      this.especialidades = data;
    });
  }

  onEspecialidadChange(event: any): void {
    this.router.navigate(['/medicos'], { queryParams: { especialidadId: this.selectedEspecialidad } });
  }
}
