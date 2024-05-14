import {Component, Input, OnInit} from '@angular/core';
import {
  IonButton,
  IonButtons, IonContent,
  IonHeader,
  IonInput,
  IonItem,
  IonTitle,
  IonToggle,
  IonToolbar, ModalController
} from "@ionic/angular/standalone";
import {FormsModule} from "@angular/forms";
import {IonicModule} from "@ionic/angular";

@Component({
  selector: 'app-update-task-modal',
  templateUrl: './update-task-modal.component.html',
  styleUrls: ['./update-task-modal.component.scss'],
  standalone: true,
  imports: [
    FormsModule,
    IonInput,
    IonItem,
    IonToggle,
    IonHeader,
    IonToolbar,
    IonButtons,
    IonButton,
    IonTitle,
    IonContent,
  ]
})
export class UpdateTaskModalComponent {

  @Input()
  taskName: string = '';

  @Input()
  taskUrgent: boolean = false;

  constructor(
    private modalController: ModalController
  ) { }

  async confirm() {
    await this.modalController.dismiss({ cancel: false, model: { name: this.taskName, urgent: this.taskUrgent } });
  }

  async cancel() {
    await this.modalController.dismiss({ cancel: true });
  }
}
