import { Component, Input } from '@angular/core';
import { EspecialidadesService } from '../service/especialidades.service';

@Component({
  selector: 'app-confirmar-reserva',
  templateUrl: './confirmar-reserva.component.html'
})
export class ConfirmarReservaComponent {
  @Input() horarioId: number | undefined;
  @Input() usuarioId: number | undefined;

  constructor(private especialidadesService: EspecialidadesService) {}

  confirmarReserva(): void {
    if (this.horarioId !== undefined && this.usuarioId !== undefined) {
      this.especialidadesService.reservarHora(this.horarioId, this.usuarioId).subscribe(response => {
        alert('Reserva confirmada');
      });
    } else {
      alert('HorarioId or UsuarioId is undefined');
    }
  }
}
