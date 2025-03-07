import { Injectable, signal } from '@angular/core';
import { Product } from '../models/inventory.interface';

@Injectable({
  providedIn: 'root',
})
export class InventoryService {
  public inventory = signal<Product[]>([]);
  constructor() {
    const products = JSON.parse(localStorage.getItem('inventory') || '[]');
    this.inventory.set(products);
  }

  public addProduct(product: Product) {
    this.inventory.update((prev) => [...prev, product]);
    localStorage.setItem('inventory', JSON.stringify(this.inventory()));
  }
}
