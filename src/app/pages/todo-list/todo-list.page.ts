import {Component} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonButton,
  IonContent,
  IonHeader,
  IonIcon,
  IonInput,
  IonItem, IonList,
  IonTitle, IonToggle,
  IonToolbar
} from '@ionic/angular/standalone';
import {HeaderComponent} from "../../components/header/header.component";
import {addIcons} from "ionicons";
import {add, checkmark, warning } from "ionicons/icons";
import {Task} from "../../models/task.model";

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

  tasks: Task[] = [];

  sortedTasks: Task[] = [];

  constructor(
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
    this.taskName = '';
    this.taskUrgent = false;

    this.sortedTasks = this.tasks.sort((a, b) => {
      if(!a.urgent && b.urgent) {
        return 1;
      }
      return -1;
    })
  }
}
