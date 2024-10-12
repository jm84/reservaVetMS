import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'sistema-reservas';
  constructor(private router: Router) {}
  irAEspecialidades() {
    this.router.navigate(['/especialidades']);
  }
}
