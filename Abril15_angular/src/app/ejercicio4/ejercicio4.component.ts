import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms'; // Quita la importación de FormsModule

@Component({
  selector: 'app-ejercicio4',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule], // Quita la importación de FormsModule
  templateUrl: './ejercicio4.component.html',
  styleUrls: ['./ejercicio4.component.css']
})
export class Ejercicio4Component implements OnInit {
  formulario!: FormGroup;
  nacionalidades: string[] = ['Española', 'Mexicana', 'Argentina', 'Colombiana', 'Peruana'];
  lenguajes: string[] = ['C++', 'Java', 'JavaScript', 'Python', 'TypeScript'];

  constructor() { }

  ngOnInit(): void {
    this.formulario = new FormGroup({
      nombre: new FormControl('', [Validators.required]),
      genero: new FormControl('mujer'),
      nacionalidades: new FormControl([]),
      lenguajes: new FormControl([])
    });
  }

  mostrarInformacion(): void {
    const modal = document.getElementById('modalInformacion');
    if (modal) {
      modal.style.display = 'block';
    }
  }

  onClose(): void {
    const modal = document.getElementById('modalInformacion');
    if (modal) {
      modal.style.display = 'none';
    }
  }
}
