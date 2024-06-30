import { Component } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  // styleUrls: ['./product.component.scss']
})
export class ProductComponent {
  popularProducts = [
    {
      imgUrl: 'https://placehold.co/300x250/EEE/31343C',
      productName: 'Gyro Sandwhich',
      rating: '4.9',
      price: '15.00',
      currency: '$',
    },
    {
      imgUrl: 'https://placehold.co/300x250/EEE/31343C',
      productName: 'Gyro Sandwhich',
      rating: '4.9',
      price: '15.00',
      currency: '$',
    },
    {
      imgUrl: 'https://placehold.co/300x250/EEE/31343C',
      productName: 'Gyro Sandwhich',
      rating: '4.9',
      price: '15.00',
      currency: '$',
    },
  ];
}
