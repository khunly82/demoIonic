import { Component } from '@angular/core';
import {
  IonApp,
  IonContent,
  IonHeader, IonIcon,
  IonItem,
  IonMenu, IonMenuToggle, IonNavLink,
  IonRouterOutlet,
  IonTitle,
  IonToolbar
} from '@ionic/angular/standalone';
import {RouterLink} from "@angular/router";
import {addIcons} from "ionicons";
import {alarm, home, list} from "ionicons/icons";
import {HomePage} from "./pages/home/home.page";
import {ChronoPage} from "./pages/chrono/chrono.page";

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  standalone: true,
  imports: [IonApp, IonRouterOutlet, IonMenu, IonHeader, IonContent, IonTitle, IonItem, RouterLink, IonToolbar, IonNavLink, IonIcon, HomePage, ChronoPage, IonMenuToggle],
})
export class AppComponent {
  constructor() {
    addIcons({
      home,
      alarm,
      list,
    });
  }
}
