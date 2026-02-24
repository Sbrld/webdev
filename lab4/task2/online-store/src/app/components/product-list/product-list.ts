import { Component } from '@angular/core';
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
}
