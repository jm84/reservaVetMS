import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SeleccionarEspecialidadComponent } from './seleccionar-especialidad/seleccionar-especialidad.component';
import { SeleccionarMedicoComponent } from './seleccionar-medico/seleccionar-medico.component';
import { SeleccionarHorarioComponent } from './seleccionar-horario/seleccionar-horario.component';
import { ConfirmarReservaComponent } from './confirmar-reserva/confirmar-reserva.component';

const routes: Routes = [
  { path: 'especialidades', component: SeleccionarEspecialidadComponent },
  { path: 'medicos', component: SeleccionarMedicoComponent },
  { path: 'horarios', component: SeleccionarHorarioComponent },
  { path: 'confirmar-reserva', component: ConfirmarReservaComponent },
  { path: '', redirectTo: '/especialidades', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
