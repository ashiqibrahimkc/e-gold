import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from './product.model';

@Component({
  selector: 'app-product-details',
  imports: [CommonModule],
  templateUrl: './product-details.html',
  styleUrl: './product-details.css'
})
export class ProductDetails {
 product:any = {
  name:'gold ring',
  rating: 4.5,
  reviews: 27140,
  price: 24999,
  originalPrice: 27999,
  discount: 10,
  thumbnail: 'assets/images/ring.jpg',
  images: [
    'assets/images/ring1.jpg',
    'assets/images/ring2.jpg',
    'assets/images/ring3.jpg'
  ]
  };
  selectedImage: string = this.product.thumbnail;
  selectImage(image: string) {
    this.selectedImage = image;
  }

}


