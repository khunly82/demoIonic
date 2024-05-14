import {Component} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  ActionSheetController, AlertController,
  IonButton,
  IonContent,
  IonHeader,
  IonIcon,
  IonInput,
  IonItem, IonList,
  IonTitle, IonToggle,
  IonToolbar, ModalController
} from '@ionic/angular/standalone';
import {HeaderComponent} from "../../components/header/header.component";
import {addIcons} from "ionicons";
import {add, checkmark, warning } from "ionicons/icons";
import {Task} from "../../models/task.model";
import {UpdateTaskModalComponent} from "../../components/update-task-modal/update-task-modal.component";

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.page.html',
  styleUrls: ['./todo-list.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, HeaderComponent, IonItem, IonInput, IonButton, IonIcon, IonToggle, IonList]
})
export class TodoListPage {

  taskName: string = '';
  taskUrgent: boolean = false;
  sortedTasks: Task[] = [];

  private tasks: Task[] = [];

  constructor(
    private readonly actionController: ActionSheetController,
    private readonly alertController: AlertController,
    private readonly modalController: ModalController
  ) {
    addIcons({
      add,
      checkmark,
      warning
    })
  }

  add() {
    if(!this.taskName) {
      return;
    }
    const task: Task = { name: this.taskName, urgent: this.taskUrgent, completed: false };
    this.tasks = [...this.tasks, task];

    // vider les champs
    this.taskName = '';
    this.taskUrgent = false;

    // trier les tâches
    this.sortedTasks = this.getSortedTasks();
  }

  async displayActionsSheet(task: Task) {
    const actionsSheet = await this.actionController.create({
      header: 'Actions',
      buttons: [
        { text: task.completed ? 'Décocher' : 'Cocher', handler: () => this.toggle(task) },
        { text: 'Modifier', handler: () => this.update(task) },
        { text: 'Supprimer', role: 'destructive', handler: () => this.delete(task) },
        { text: 'Annuler', role: 'cancel' }
      ]
    });
    await actionsSheet.present();
  }

  private toggle(task: Task) {
    task.completed = !task.completed;
  }

  private async update(task: Task) {
    const modal = await this.modalController.create({
      component: UpdateTaskModalComponent,
      componentProps: { taskName: task.name, taskUrgent: task.urgent }
    })
    await modal.present();

    const { data } = await modal.onDidDismiss();

    if(!data.cancel) {
      this.tasks = this.tasks.map(t => t === task ? { ...task, ...data.model } : t);
    }
    this.sortedTasks = this.getSortedTasks();
  }

  private async delete(task: Task) {
    const alert = await this.alertController.create({
      header: 'Êtes vous sûr de vouloir continuer la suppresion de «' + task.name + '» ?',
      buttons: [
        { text: 'Non' },
        { text: 'Oui', handler: () => {
            // this.tasks.splice(this.tasks.indexOf(task), 1)
            this.tasks = this.tasks.filter(t => t !== task);
            this.sortedTasks = this.getSortedTasks();
          } }
      ]
    });

    await alert.present();
  }

  private getSortedTasks() {
    return this.tasks.sort((a, b) => {
      if(!a.urgent && b.urgent) {
        return 1;
      }
      return -1;
    });
  }
}
