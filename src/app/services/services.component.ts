import { Component } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss'],
})
export class ServicesComponent {
  serviceItems = [
    {
      imgUrl: 'icon-utensils.svg',
      title: 'Quality food',
      text: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius ipsam itaque magni dignissimos maxime aperiam.',
    },
    {
      imgUrl: 'icon-spoonfork.svg',
      title: 'Healthy Food',
      text: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius ipsam itaque magni dignissimos maxime aperiam.',
    },
    {
      imgUrl: 'icon-delivery-2.svg',
      title: 'Fast Delivery',
      text: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius ipsam itaque magni dignissimos maxime aperiam.',
    },
  ];
}
