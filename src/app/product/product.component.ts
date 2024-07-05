import { Component } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  // styleUrls: ['./product.component.scss']
})
export class ProductComponent {
  popularProducts = [
    {
      imgUrl: 'img-popular-1.svg',
      productName: 'Gyro Sandwhich',
      rating: '4.9',
      price: '15.00',
      currency: '$',
    },
    {
      imgUrl: 'img-popular-2.svg',
      productName: 'Gyro Sandwhich',
      rating: '4.9',
      price: '15.00',
      currency: '$',
    },
    {
      imgUrl: 'img-popular-3.svg',
      productName: 'Gyro Sandwhich',
      rating: '4.9',
      price: '15.00',
      currency: '$',
    },
    {
      imgUrl: 'img-popular-4.svg',
      productName: 'Gyro Sandwhich',
      rating: '4.9',
      price: '15.00',
      currency: '$',
    },
    {
      imgUrl: 'img-popular-5.svg',
      productName: 'Gyro Sandwhich',
      rating: '4.9',
      price: '15.00',
      currency: '$',
    },
    {
      imgUrl: 'img-popular-6.svg',
      productName: 'Gyro Sandwhich',
      rating: '4.9',
      price: '15.00',
      currency: '$',
    },
  ];
}
