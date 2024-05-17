import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonButton,
  IonCard, IonCardContent,
  IonCardHeader,
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar
} from '@ionic/angular/standalone';
import {HeaderComponent} from "../../components/header/header.component";
import {BarcodeScanner} from "@capacitor-mlkit/barcode-scanning";
import {Food, Product} from "../../models/food.model";
import {FoodService} from "../../services/food.service";

@Component({
  selector: 'app-scanner',
  templateUrl: './scanner.page.html',
  styleUrls: ['./scanner.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, HeaderComponent, IonButton, IonCard, IonCardHeader, IonCardContent]
})
export class ScannerPage implements OnInit {

  barcode: string|undefined;
  product: Product|undefined;

  constructor(
    private readonly _foodService: FoodService,
  ) { }

  ngOnInit() {
    BarcodeScanner.isSupported().then(async (result) => {
      if(!result.supported) {
        await BarcodeScanner.installGoogleBarcodeScannerModule();
      }
    });
  }

  async scan() {
    const permissions = await BarcodeScanner.requestPermissions();
    if(permissions.camera === 'granted' || permissions.camera === 'limited') {
      const { barcodes } = await BarcodeScanner.scan();
      this.barcode = barcodes[0].rawValue;
      this._foodService.getFoodByBarecode(this.barcode).subscribe({
        next: (result) => {
          console.log(result)
          this.product = result.product
        },
        error: (err) => {
          console.log(err)
        }
      })
    }
  }

}
