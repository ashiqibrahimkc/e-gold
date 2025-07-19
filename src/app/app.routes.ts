import { Routes } from '@angular/router';
import { Home } from './web/home/home';
import { ProductDetails } from './web/product-details/product-details';
export const routes: Routes = [
    {path: '', redirectTo: '/home', pathMatch: 'full'},
    {path: 'home', component: Home},
    {path: 'product-details', component: ProductDetails}
];
