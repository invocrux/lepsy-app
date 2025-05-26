import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { IonicModule, NavController, ModalController } from '@ionic/angular';
import {
  ModalMedicamentoComponent,
  TipoHorario,
} from '../modal-medicamento/modal-medicamento.component';

export interface HorarioMedicamento {
  checked: boolean;
  hora: string;
  nombre: string;
  tipoMedicamento: string;
  cantidad: number;
}

@Component({
  selector: 'app-control-medicamentos',
  imports: [IonicModule, CommonModule],
  standalone: true,
  templateUrl: 'control-medicamentos.component.html',
  styleUrl: './control-medicamentos.component.css',
})
export class ControlMedicamentosComponent {
  horarioManana: HorarioMedicamento[] = [
    {
      checked: true,
      nombre: 'Clonazepam oral (0.5 mg)',
      hora: '08:00 AM',
      tipoMedicamento: 'Pastilla',
      cantidad: 1,
    },
  ];
  horarioTarde: HorarioMedicamento[] = [
    {
      checked: true,
      nombre: 'Ácido valproico – 250 mg',
      hora: '2:30 PM',
      tipoMedicamento: 'Dosis',
      cantidad: 1,
    },
  ];
  horarioNoche: HorarioMedicamento[] = [
    {
      checked: true,
      nombre: 'Clobazam – 5 mg',
      hora: '08:00 PM',
      tipoMedicamento: 'Pastilla',
      cantidad: 1,
    },
    {
      checked: true,
      nombre: 'Ácido valproico – 250 mg',
      hora: '8:30 PM',
      tipoMedicamento: 'Dosis',
      cantidad: 1,
    },
  ];

  constructor(
    private readonly navCtrl: NavController,
    private modalController: ModalController
  ) {}

  onMostrarLogin() {
    this.navCtrl.back();
  }

  async openAddMedicamento() {
    const modal = await this.modalController.create({
      component: ModalMedicamentoComponent,
      cssClass: 'auto-size-end',
      backdropDismiss: false,
    });

    await modal.present();
    const { data } = await modal.onWillDismiss();

    if (!data) {
      return;
    }

    if (data.horaDia === TipoHorario.MANANA) {
      this.horarioManana.push({
        checked: true,
        nombre: data.nombre,
        hora: data.hora,
        tipoMedicamento: data.tipoMedicamento,
        cantidad: data.cantidad,
      });
    }

    if (data.horaDia === TipoHorario.TARDE) {
      this.horarioTarde.push({
        checked: true,
        nombre: data.nombre,
        hora: data.hora,
        tipoMedicamento: data.tipoMedicamento,
        cantidad: data.cantidad,
      });
    }

    if (data.horaDia === TipoHorario.NOCHE) {
      this.horarioNoche.push({
        checked: true,
        nombre: data.nombre,
        hora: data.hora,
        tipoMedicamento: data.tipoMedicamento,
        cantidad: data.cantidad,
      });
    }
  }
}
