import { Component } from '@angular/core';

/**
 * Generated class for the BoxDriverComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'box-driver',
  templateUrl: 'box-driver.html'
})
export class BoxDriverComponent {

  text: string;

  constructor() {
    console.log('Hello BoxDriverComponent Component');
    this.text = 'Hello World';
  }

}
