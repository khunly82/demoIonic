import {Component, Input, OnInit} from '@angular/core';
import {IonButtons, IonHeader, IonMenuButton, IonTitle, IonToolbar} from "@ionic/angular/standalone";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  standalone: true,
  imports: [
    IonButtons,
    IonHeader,
    IonMenuButton,
    IonTitle,
    IonToolbar
  ]
})
export class HeaderComponent {

  @Input()
  title: string = 'test'

  constructor() { }

}
