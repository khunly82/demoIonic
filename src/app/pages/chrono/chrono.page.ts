import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonButton,
  IonButtons, IonCard, IonCardContent, IonCardHeader, IonCardTitle,
  IonContent,
  IonHeader, IonIcon,
  IonMenuButton,
  IonTitle,
  IonToolbar
} from '@ionic/angular/standalone';
import {addIcons} from "ionicons";
import {codeWorking, play, refresh, stop} from "ionicons/icons";
import {TimePipe} from "../../pipes/time.pipe";
import {interval} from "rxjs";

@Component({
  selector: 'app-chrono',
  templateUrl: './chrono.page.html',
  styleUrls: ['./chrono.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonButtons, IonMenuButton, IonButton, IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonIcon, TimePipe]
})
export class ChronoPage implements OnInit {

  time: number = 0;
  interval: any = null;
  memo: number = 0;

  constructor() {
    addIcons({
      play: play,
      stop: stop,
      refresh: refresh
    })
  }

  ngOnInit() {
  }

  start() {
    if(this.interval) {
      return;
    }
    const startTime = new Date().getTime();
    this.interval = setInterval(() => {
      this.time = new Date().getTime() - startTime + this.memo;
    });
  }

  stop() {
    clearInterval(this.interval);
    this.interval = null;
    this.memo = this.time;
  }

  reset() {
    this.time = 0;
    this.stop();
  }

}
