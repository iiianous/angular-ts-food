import { Component } from '@angular/core';

@Component({
  selector: 'app-hot-it-works',
  templateUrl: './hot-it-works.component.html',
  styleUrls: ['./hot-it-works.component.scss']
})
export class HotItWorksComponent {
  serviceItems = [
    {
      imgUrl: 'img-laptop.png',
      title: 'Choose',
      text: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius ipsam itaque magni dignissimos maxime aperiam.',
    },
    {
      imgUrl: 'img-food-set.png',
      title: 'Prepare Food',
      text: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius ipsam itaque magni dignissimos maxime aperiam.',
    },
    {
      imgUrl: 'img-paper-bag.png',
      title: 'Deliver',
      text: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius ipsam itaque magni dignissimos maxime aperiam.',
    },
  ];
}
