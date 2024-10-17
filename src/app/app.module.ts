import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { SeleccionarEspecialidadComponent } from './seleccionar-especialidad/seleccionar-especialidad.component';
import { SeleccionarMedicoComponent } from './seleccionar-medico/seleccionar-medico.component';
import { SeleccionarHorarioComponent } from './seleccionar-horario/seleccionar-horario.component';
import { ConfirmarReservaComponent } from './confirmar-reserva/confirmar-reserva.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { HttpClientModule } from '@angular/common/http';
import { MatFormFieldModule } from '@angular/material/form-field';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTabsModule } from '@angular/material/tabs';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
@NgModule({
  declarations: [
    AppComponent,
    SeleccionarEspecialidadComponent,
    SeleccionarMedicoComponent,
    SeleccionarHorarioComponent,
    ConfirmarReservaComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatButtonModule,
    MatCardModule,
    MatTabsModule,
    RouterModule,
  ],
  providers: [provideAnimationsAsync()],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {}
