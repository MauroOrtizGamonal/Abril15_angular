import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-ejercicio2',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './ejercicio2.component.html',
  styleUrl: './ejercicio2.component.css'
})
export class Ejercicio2Component {
  selectedRam: string = '';
  selectedProcessor: string = '';
  selectedGraphicsCard: string = '';
  selectedHardDrives: boolean[] = [];
  selectedPowerSupply: string = '';

  ramOptions = ['32GB', '16GB', '8GB'];
  processorOptions = ['Core i9 N8', 'Core i7 N7', 'Core i5 N6'];
  graphicsCardOptions = ['NVIDIA GeForce RTX 3080', 'AMD Radeon RX 6800 XT', 'NVIDIA GeForce GTX 1660 Ti'];
  hardDrivesOptions = ['1TB HDD', '500GB SSD', '2TB HDD'];
  powerSupplyOptions = ['600W', '750W', '850W'];

  mostrarInformacion() {
    console.log('--- Información seleccionada ---');
    console.log(`RAM: ${this.selectedRam}`);
    console.log(`Procesador: ${this.selectedProcessor}`);
    console.log(`Tarjeta gráfica: ${this.selectedGraphicsCard}`);
    console.log(`Discos duros: ${this.getSelectedHardDrives()}`);
    console.log(`Fuente de alimentación: ${this.selectedPowerSupply}`);
  }

  addHardDriveOption() {
    this.hardDrivesOptions.push('Otro disco duro');
    this.selectedHardDrives.push(false);
  }

  removeHardDriveOption() {
    const index = this.selectedHardDrives.findIndex(selected => selected);
    if (index !== -1) {
      this.hardDrivesOptions.splice(index, 1);
      this.selectedHardDrives.splice(index, 1);
    }
  }

  getSelectedHardDrives(): string {
    const selectedDrives: string[] = [];
    this.selectedHardDrives.forEach((selected, index) => {
      if (selected) {
        selectedDrives.push(this.hardDrivesOptions[index]);
      }
    });
    return selectedDrives.join(', ');
  }
}