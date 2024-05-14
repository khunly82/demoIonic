import { Component } from '@angular/core';
import {
  IonApp,
  IonContent,
  IonHeader, IonIcon,
  IonItem,
  IonMenu, IonNavLink,
  IonRouterOutlet,
  IonTitle,
  IonToolbar
} from '@ionic/angular/standalone';
import {RouterLink} from "@angular/router";
import {addIcons} from "ionicons";
import {alarm, home} from "ionicons/icons";

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  standalone: true,
  imports: [IonApp, IonRouterOutlet, IonMenu, IonHeader, IonContent, IonTitle, IonItem, RouterLink, IonToolbar, IonNavLink, IonIcon],
})
export class AppComponent {
  constructor() {
    addIcons({
      home,
      alarm,
    })
  }
}
