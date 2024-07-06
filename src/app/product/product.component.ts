import { Component } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  // styleUrls: ['./product.component.scss']
})
export class ProductComponent {
  popularProducts = [
    {
      imgUrl: 'img-popular-1.png',
      productName: 'Gyro Sandwhich',
      rating: '4.9',
      price: '15.00',
      currency: '$',
    },
    {
      imgUrl: 'img-popular-2.png',
      productName: 'Gyro Sandwhich',
      rating: '4.9',
      price: '15.00',
      currency: '$',
    },
    {
      imgUrl: 'img-popular-3.png',
      productName: 'Gyro Sandwhich',
      rating: '4.9',
      price: '15.00',
      currency: '$',
    },
    {
      imgUrl: 'img-popular-4.png',
      productName: 'Gyro Sandwhich',
      rating: '4.9',
      price: '15.00',
      currency: '$',
    },
    {
      imgUrl: 'img-popular-5.png',
      productName: 'Gyro Sandwhich',
      rating: '4.9',
      price: '15.00',
      currency: '$',
    },
    {
      imgUrl: 'img-popular-6.png',
      productName: 'Gyro Sandwhich',
      rating: '4.9',
      price: '15.00',
      currency: '$',
    },
  ];
}
