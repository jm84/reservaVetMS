import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EspecialidadesService {
  private apiUrl = 'http://localhost:8080/api';

  constructor(private http: HttpClient) {}

  getEspecialidades(): Observable<any> {
    return this.http.get(`${this.apiUrl}/especialidades`);
  }

  // getMedicos(especialidadId: number): Observable<any> {
  //   return this.http.get(
  //     `${this.apiUrl}/medicos?especialidadId=${especialidadId}`
  //   );
  // }
  getMedicosByEspecialidad(especialidadId: number): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/especialidad/${especialidadId}`);
  }

  getHorarios(medicoId: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/horarios?medicoId=${medicoId}`);
  }

  reservarHora(horarioId: number, usuarioId: number): Observable<any> {
    return this.http.post(`${this.apiUrl}/reservas`, { horarioId, usuarioId });
  }
}
