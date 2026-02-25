import { Component, effect, input } from '@angular/core';
import { Product } from '../models/product.model'
import { ProductItemComponent } from '../product-item/product-item.component';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [ProductItemComponent],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css',
})
export class ProductListComponent {
  products = input.required<Product[]>();
  viewProducts: Product[] = [];

  constructor() {
    effect(() => {
      this.viewProducts = [...this.products()];
    });
  }

  onDelete(productId: number): void {
    this.viewProducts = this.viewProducts.filter(p => p.id !== productId);
  }
}
