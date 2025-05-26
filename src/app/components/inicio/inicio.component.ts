import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { IonicModule, LoadingController, ModalController, NavController } from '@ionic/angular';
import { ModalEndComponent } from '../modal-end/modal-end.component';

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [IonicModule, CommonModule],
  templateUrl: 'inicio.component.html',
  styleUrl: './inicio.component.css',
})
export class InicioComponent {

  mostrarVincular: boolean = true;
  mostrarVinculando: boolean = false;
  frameVinculado: boolean = false;

  constructor(
    private loadingController: LoadingController,
    private modalController: ModalController,
    private readonly navCtrl: NavController,
  ) {}

  onVincular(event: CustomEvent){
    console.log(event.detail);
    if (event.detail.checked) {
      this.mostrarVinculando = true;
      this.mostrarVincular = false;
      this.mostrarLogin();
    }else{
      this.mostrarVinculando = false;
      this.mostrarVincular = true;
      this.desvincularLogin();
    }
  }

 async  mostrarLogin() {
    console.log('Mostrar loading');
    
    const loading = await this.loadingController.create({
      message: 'Vinculando dispositivo...',
      mode: 'ios',
      animated: true,
      spinner: 'crescent',
      translucent: true,
      backdropDismiss: false,
    })
    setTimeout(() => {
      this.loadingController.dismiss();
      this.frameVinculado = true;
    }, 2000);

    loading.present();

  }

  async  desvincularLogin() {
    
    const loading = await this.loadingController.create({
      message: 'Desvinculando dispositivo...',
      mode: 'ios',
      animated: true,
      spinner: 'crescent',
      translucent: true,
      backdropDismiss: false,
    })
    setTimeout(() => {
      this.loadingController.dismiss();
      this.frameVinculado = false;
    }, 2000);

    loading.present();

  }

  async onOptions(){

    const modal = await this.modalController.create({
      component: ModalEndComponent,
      cssClass: 'auto-size-end',
    }
    )
    await modal.present();
   
  }

  atrasp() {
    this.frameVinculado = false;
  }

  onAtras(){
    this.navCtrl.navigateForward('/home');
  }

  onControlMedicamentos() {
    this.navCtrl.navigateForward('/control-medicamentos');
  }

  onHistorialCrisis(){
    this.navCtrl.navigateForward('/historial-epileptico');
  }

  logout(){
    this.navCtrl.navigateForward('/home');
  }
 }
