import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Food} from "../models/food.model";

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor(
    private httpClient: HttpClient,
  ) { }

  getFoodByBarecode(barecode :string) {
    return this.httpClient.get<Food>('https://world.openfoodfacts.org/api/v0/product/' + barecode + '.json')
  }
}
