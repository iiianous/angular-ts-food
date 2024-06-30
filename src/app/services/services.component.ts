import { Component } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss'],
})
export class ServicesComponent {
  serviceItems = [
    {
      imgUrl: 'https://placehold.co/100x100/EEE/31343C',
      title: 'Quality food',
      text: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius ipsam itaque magni dignissimos maxime aperiam.',
    },
    {
      imgUrl: 'https://placehold.co/100x100/EEE/31343C',
      title: 'Healthy Food',
      text: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius ipsam itaque magni dignissimos maxime aperiam.',
    },
    {
      imgUrl: 'https://placehold.co/100x100/EEE/31343C',
      title: 'Fast Delivery',
      text: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius ipsam itaque magni dignissimos maxime aperiam.',
    },
  ];
}
