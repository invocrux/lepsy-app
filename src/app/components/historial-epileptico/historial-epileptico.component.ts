import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { IonicModule, NavController } from '@ionic/angular';


@Component({
  selector: 'app-historial-epileptico',
  imports: [IonicModule, CommonModule],
  templateUrl: 'historial-epileptico.component.html',
  styleUrl: './historial-epileptico.component.css',
})
export class HistorialEpilepticoComponent {
  constructor(
    private readonly navCtrl: NavController,
  ) {}

  onMostrarLogin() {
    this.navCtrl.back();
}
 }


