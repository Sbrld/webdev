import { Component, signal, computed } from '@angular/core';
import { PRODUCTS } from '../../data/product'
import { ProductCard } from '../product-card/product-card';

@Component({
  selector: 'app-product-list',
  imports: [ProductCard],
  templateUrl: './product-list.html',
  styleUrl: './product-list.css',
})
export class ProductList {
  products = PRODUCTS;

  favoriteIds = signal<number[]>([]);
  showFavoritesOnly = signal(false);
  favoritesCount = computed(() => this.favoriteIds().length);
  displayedProducts = computed(() => {
    if (this.showFavoritesOnly()) {
      return this.products.filter(p => this.favoriteIds().includes(p.id));
    }
    return this.products;
  });

  toggleFavorite(productId: number): void {
    this.favoriteIds.update(ids =>
      ids.includes(productId)
        ? ids.filter(id => id !== productId)
        : [...ids, productId]
    );
  }

  isFavorite(productId: number): boolean {
    return this.favoriteIds().includes(productId);
  }

}
