import { Component } from '@angular/core';
import { IonicModule, ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modal-info',
  standalone: true,
  imports: [IonicModule],
  templateUrl: './modal-info.component.html',
  styleUrl: './modal-info.component.scss',
})
export class ModalInfoComponent {
  constructor(private readonly modalController: ModalController) { }

  closeModal() {
    this.modalController.dismiss();
  }
}
