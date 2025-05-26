import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { IonicModule, ModalController } from '@ionic/angular';

export enum TipoHorario{
  MANANA = 1,
  TARDE = 2,
  NOCHE = 3
}
@Component({
  selector: 'app-modal-medicamento',
  imports: [IonicModule, CommonModule],
  templateUrl: 'modal-medicamento.component.html',
  styleUrl: './modal-medicamento.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})


export class ModalMedicamentoComponent {
  nombreMedicamento: string = '';
  tipoMedicamento: string = '';
  hora: string = '08:00:00';
  cantidad: number = 1;
  horaDia: number = 0; // 1: mañana, 2: tarde, 3: noche
  comienzo: string = '2023-10-01';

  constructor(private modalController: ModalController) {
    this.modalController.dismiss({
      nombre: this.nombreMedicamento,
      tipoMedicamento: this.tipoMedicamento,
      hora: this.hora,
      cantidad: this.cantidad,
      horaDia: this.determinarPeriodoDelDia(new Date(this.hora))
    });

  }

  onClose() {
    this.modalController.dismiss({
      nombre: this.nombreMedicamento,
      tipoMedicamento: this.tipoMedicamento,
      hora: this.hora,
      cantidad: this.cantidad,
      horaDia: this.determinarPeriodoDelDia(new Date(this.hora))
    });
  }

  tipoJarabe(){
    this.tipoMedicamento = 'Jarabe';
  }

  tipoPastilla(){
    this.tipoMedicamento = 'Pastilla';
  }

  tipoInyectable(){
    this.tipoMedicamento = 'Inyectable';
  }

  tipoSpray(){
    this.tipoMedicamento = 'Spray';
  }

  changeFecha(event: any){
    console.log('fecha selecionada', event.detail.value);
    console.log('fecha formateada', this.objFechaNormalize(event.detail.value));
    this.comienzo = this.objFechaNormalize(event.detail.value).day;
    this.hora = this.objFechaNormalize(event.detail.value).hour;
  }

  objFechaNormalize(fechaStr: string): { day: string, hour: string } {
    if (!fechaStr) return { day: '', hour: '' };     
    const date = new Date(fechaStr);
    const formattedDate = date.toISOString().split('T')[0];
    const formattedHour = date.toISOString().split('T')[1].split('.')[0];
    return { day: formattedDate, hour: formattedHour };
  }
  
  determinarPeriodoDelDia(fecha: Date): number {
    const hora = fecha.getHours();
  
    if (hora >= 6 && hora < 12) {
      return TipoHorario.MANANA;
    } else if (hora >= 12 && hora < 14) {
      return TipoHorario.MANANA;
    } else if (hora >= 14 && hora < 20) {
      return TipoHorario.TARDE;
    } else {
      return TipoHorario.NOCHE;
    }
  }

  onNombre(event: any) {
    this.nombreMedicamento = event.detail.value;
  }

  onCantidad(event: any) {  
    this.cantidad = event.detail.value;
  }

  onCancelar(){
    this.modalController.dismiss();
  }

 }
