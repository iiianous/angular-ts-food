import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss'],
})
export class HeroComponent {
  operatingHours = [
    {
      operatingHour: 'Today: 10:00AM - 10:00PM',
      url: 'icon-clock.svg',
      text: 'Working time',
    },
    {
      operatingHour: 'Washington, DC, USA',
      url: 'icon-location-pin.svg',
      text: 'Our Location',
    },
    {
      operatingHour: '10:00AM - 10:00PM',
      url: 'icon-phone.svg',
      text: 'Phone Number',
    },
  ];
}
