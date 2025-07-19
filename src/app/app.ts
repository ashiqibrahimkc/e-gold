import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Home } from './web/home/home';
import { CommonModule } from '@angular/common';
import { ProductDetails } from './web/product-details/product-details';
import { ViewChild,ElementRef } from '@angular/core';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet,CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'web';
   @ViewChild('sideUl') sideUl!: ElementRef;

  showMenu() {
    this.sideUl.nativeElement.style.visibility = 'visible';
  }

  closeMenu() {
    this.sideUl.nativeElement.style.visibility = 'hidden';
  }
}
