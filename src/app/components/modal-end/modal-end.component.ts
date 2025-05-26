import { ChangeDetectionStrategy, Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-modal-end',
  imports: [IonicModule],
  templateUrl: 'modal-end.component.html',
  styleUrl: './modal-end.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ModalEndComponent { }
