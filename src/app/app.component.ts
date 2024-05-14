import { Component } from '@angular/core';
import {
  IonApp,
  IonContent,
  IonHeader,
  IonItem,
  IonMenu, IonNavLink,
  IonRouterOutlet,
  IonTitle,
  IonToolbar
} from '@ionic/angular/standalone';
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  standalone: true,
  imports: [IonApp, IonRouterOutlet, IonMenu, IonHeader, IonContent, IonTitle, IonItem, RouterLink, IonToolbar, IonNavLink],
})
export class AppComponent {
  constructor() {}
}
