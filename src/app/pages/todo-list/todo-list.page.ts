import {Component, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  ActionSheetController, AlertController,
  IonButton, IonCard, IonCardContent,
  IonContent,
  IonHeader,
  IonIcon, IonInfiniteScroll, IonInfiniteScrollContent,
  IonInput,
  IonItem, IonList, IonListHeader, IonRefresher, IonRefresherContent,
  IonTitle, IonToggle,
  IonToolbar, ModalController, ToastController
} from '@ionic/angular/standalone';
import {HeaderComponent} from "../../components/header/header.component";
import {addIcons} from "ionicons";
import {add, checkmark, warning } from "ionicons/icons";
import {Task} from "../../models/task.model";
import {UpdateTaskModalComponent} from "../../components/update-task-modal/update-task-modal.component";
import {TaskService} from "../../services/task.service";

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.page.html',
  styleUrls: ['./todo-list.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, HeaderComponent, IonItem, IonInput, IonButton, IonIcon, IonToggle, IonList, IonListHeader, IonCardContent, IonCard, IonRefresher, IonRefresherContent, IonInfiniteScroll, IonInfiniteScrollContent]
})
export class TodoListPage implements OnInit {

  taskName: string = '';
  taskUrgent: boolean = false;
  sortedTasks: Task[] = [];

  disabledInfiniteScroll: boolean = false;

  private _page: number = 1;

  private _tasks: Task[] = [];

  get tasks(): Task[] {
    return this._tasks
  }

  set tasks(newTasks: Task[]) {
    this._tasks = newTasks;
    this.sortedTasks = this.getSortedTasks();
  }

  constructor(
    private readonly _actionController: ActionSheetController,
    private readonly _alertController: AlertController,
    private readonly _modalController: ModalController,
    private readonly _toastController: ToastController,
    private readonly _taskService: TaskService,
  ) {
    addIcons({
      add,
      checkmark,
      warning
    })
  }

  ngOnInit() {
    this.loadData();
  }

  scroll(event: any) {
    this._page++;
    this.loadData(event);
  }

  add() {
    if(!this.taskName) {
      return;
    }

    // création d'une nouvelle tache
    const task: Task = { name: this.taskName, urgent: this.taskUrgent, completed: false };

    // envoyer la tache sur le serveur
    this._taskService.addTask(task).subscribe({
      next: result => {
        this.tasks = [...this.tasks, result];
        this.onUpdate();

        // vider les champs
        this.taskName = '';
        this.taskUrgent = false;
      }, error: error => this.onError(error)
    })
  }

  async displayActionsSheet(task: Task) {
    const actionsSheet = await this._actionController.create({
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

  loadData(event: any = null) {
    this._taskService.getTasks(this._page).subscribe({
      // methode exécutée en cas de success
      next: result => {
        this.disabledInfiniteScroll = this.tasks.length === result.length;
        this.tasks = result;
        event?.target.complete();
      },
      // méthode exécutée en cas d'erreur
      error: error => this.onError(error)
    })
  }

  private toggle(task: Task) {
    if(task.id) {
      this._taskService.updateTask(task.id, { ...task, completed: !task.completed }).subscribe({
        next: result => {
          this.tasks = this.tasks.map(t => t.id === result.id ? result : t);
          this.onUpdate();
        },
        error: err => this.onError(err)
      })
    }
  }

  private async update(task: Task) {
    const modal = await this._modalController.create({
      component: UpdateTaskModalComponent,
      componentProps: { taskName: task.name, taskUrgent: task.urgent }
    })
    await modal.present();

    const { data } = await modal.onDidDismiss();

    if(!data.cancel) {
      if(task.id) {
        this._taskService.updateTask(task.id, { ...task, ...data.model }).subscribe({
          next: result => {
            this.tasks = this.tasks.map(t => t.id === result.id ? result : t);
            this.onUpdate();
          },
          error: err => this.onError(err)
        })
      }
    }
  }

  private async delete(task: Task) {
    const alert = await this._alertController.create({
      header: 'Êtes vous sûr de vouloir continuer la suppresion de «' + task.name + '» ?',
      buttons: [
        { text: 'Non' },
        { text: 'Oui', handler: () => {
            // this.tasks.splice(this.tasks.indexOf(task), 1)
            if(task.id) {
              this._taskService.deleteTask(task.id).subscribe({
                next: result => {
                  this.tasks = this.tasks.filter(t => t !== task);
                  this.onUpdate();
                }, error: err => this.onError(err)
              })
            }
          } }
      ]
    });

    await alert.present();
  }

  private getSortedTasks() {
    return this.tasks.sort((a, b) => {
      if(a.urgent && !b.urgent) {
        return -1;
      }
      return 1;
    });
  }

  private async onError(err: any) {
    const toast = await this._toastController.create({
      header: 'Problème de connexion',
      duration: 3000,
      color: 'danger'
    })

    await toast.present();
  }

  private async onUpdate() {
    const toast = await this._toastController.create({
      header: 'La liste des tâches a été modifiée',
      duration: 3000,
      color: 'success',
      position: 'top'
    });
    await toast.present();
  }
}
