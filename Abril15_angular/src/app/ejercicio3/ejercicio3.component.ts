import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-ejercicio3',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './ejercicio3.component.html',
  styleUrls: ['./ejercicio3.component.css']
})
export class Ejercicio3Component {
  mostrarInformacion(formulario: NgForm): void {
    setTimeout(() => {
      const datos = {
        origen: formulario.value.origen,
        destino: formulario.value.destino,
        fechaIda: formulario.value.fechaIda,
        fechaVuelta: formulario.value.fechaVuelta,
        numPasajeros: formulario.value.numPasajeros
      };

      const ventanaEmergente = window.open('', '_blank', 'width=600,height=400');
      if (ventanaEmergente && !ventanaEmergente.closed) {
        ventanaEmergente.document.write(`<h1>Resumen de la reserva</h1>`);
        ventanaEmergente.document.write(`<p>Origen: ${datos.origen}</p>`);
        ventanaEmergente.document.write(`<p>Destino: ${datos.destino}</p>`);
        ventanaEmergente.document.write(`<p>Fecha de ida: ${datos.fechaIda}</p>`);
        ventanaEmergente.document.write(`<p>Fecha de vuelta: ${datos.fechaVuelta || 'No especificada'}</p>`);
        ventanaEmergente.document.write(`<p>Número de pasajeros: ${datos.numPasajeros}</p>`);
      } else {
        console.error('No se pudo abrir la ventana emergente.');
      }
    });
  }
}
