import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { delay } from 'rxjs/operators';
import { ShoppingItemModel } from './store/models/shopping-item.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShoppingService {

  private SHOPPING_URL = 'http://localhost:3000/shopping';

  constructor(private http: HttpClient) {}

  getShoppingItems(): Observable<ShoppingItemModel[]> {
    return this.http.get<ShoppingItemModel[]>(this.SHOPPING_URL)
      .pipe(
        delay(500)
      );
  }

  addShoppingItem(shoppingItem: ShoppingItemModel): any {
    return this.http.post(this.SHOPPING_URL, shoppingItem)
      .pipe(
        delay(500)
      );
  }

  deleteShoppingItem(id: string): any {
    return this.http.delete(`${this.SHOPPING_URL}/${id}`)
      .pipe(
        delay(500)
      );
  }
}
