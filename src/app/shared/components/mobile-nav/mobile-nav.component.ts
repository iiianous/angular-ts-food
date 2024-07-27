import { Component } from '@angular/core';

@Component({
  selector: 'app-mobile-nav',
  templateUrl: './mobile-nav.component.html',
  styleUrls: ['./mobile-nav.component.scss']
})
export class MobileNavComponent {
  name = "Init text";
  count = 0;
  errorMsg = "";

  onNameChange(ev: any) {
    this.name = ev.target.value
  }

  validate() {
    this.errorMsg = "A maximum of 10 orders is only allowed."
  }

  incrementCount() {
    this.count++;
  }

  decrementCount() {
    if (this.count <= 0) {
      this.count = 0;
      return;
    }
    this.count--;
  }
}
