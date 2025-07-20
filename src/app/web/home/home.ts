import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  imports: [CommonModule],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home implements OnInit,OnDestroy{
constructor(private router:Router){}
images : string[] = [
'assets/images/1.png',
'assets/images/2.png',
'assets/images/3.png'
]
jewelryCategories = [
    { image: 'assets/images/earings.jpg', label: 'EARING' },
    { image: 'assets/images/necklace.jpg', label: 'NECKLACE' },
    { image: 'assets/images/ring.jpg', label: 'RING' },
    { image: 'assets/images/chain.jpg', label: 'CHAIN' },
    { image: 'assets/images/pendant.jpg', label: 'PENDANT' },
    { image: 'assets/images/bankles.jpg', label: 'BANGLES' },
  ];
  jewelryItems = ['assets/images/jwellery1.jpg',
    'assets/images/jwellery2.jpg'
  ];
currentIndex = 0;
  intervalId: any;

  ngOnInit() {
    this.startAutoSlide();
  }
  gotoProducts(){
    console.log('Navigating to product details');
    this.router.navigate(['/product-details']);
  }

  ngOnDestroy() {
    this.stopAutoSlide();
  }

  next() {
    this.currentIndex = (this.currentIndex + 1) % this.images.length;
  }

  prev() {
    this.currentIndex = (this.currentIndex - 1 + this.images.length) % this.images.length;

  }

  startAutoSlide() {
    this.intervalId = setInterval(() => {
      this.next();
    }, 3000); 
  }

  stopAutoSlide() {
    clearInterval(this.intervalId);
  }
}
