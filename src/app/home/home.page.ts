import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ModalController, IonicModule, NavController } from '@ionic/angular';
import { ModalInfoComponent } from '../components/modal-info/modal-info.component';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [IonicModule, CommonModule],
})
export class HomePage {
  mostrarLogin: boolean = true;
  mostrarAcceso: boolean = false;
  mostrarRegistro: boolean = false;
  constructor(
    private readonly modalController: ModalController,
    private readonly navCtrl: NavController,
  ) { }

  onAcceso() {
    this.mostrarAcceso = true;
    this.mostrarLogin = false;
    this.mostrarRegistro = false;
  }

  onMostrarLogin() {
    this.mostrarAcceso = false;
    this.mostrarLogin = true;
    this.mostrarRegistro = false;
  }

  onMostrarRegistro() {
    this.mostrarAcceso = false;
    this.mostrarLogin = false;
    this.mostrarRegistro = true;
  }

  async openModal() {
    const modal = await this.modalController.create({
      component: ModalInfoComponent,
      cssClass: 'auto-size'
    })

    await modal.present();
  }

  onInicio() {
    this.mostrarAcceso = false;
    this.mostrarLogin = false;
    this.mostrarRegistro = false;
    this.navCtrl.navigateForward('/inicio');
  }
}
