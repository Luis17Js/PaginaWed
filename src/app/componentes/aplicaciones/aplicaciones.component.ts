import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-aplicaciones',
  templateUrl: './aplicaciones.component.html',
  styleUrls: ['./aplicaciones.component.css']
})
export class AplicacionesComponent {
  constructor(private router: Router) {}
}
