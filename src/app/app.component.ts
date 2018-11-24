import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
          <child-one
           [parentToChildOne]="title"
           [num1]="x"
           [num2]="y"
           (message)='readMessageFromChildOne($event)'></child-one>
           <br>
           <strong>X</strong>: {{x}}<br>
           <strong>Y</strong>: {{y}}
  `,
  styles: []
})

export class AppComponent {
  title = 'שלום';
  x: number = 4;
  y: number = 9;

  constructor () {
    setInterval(() => {
      this.x++;
      this.y++;
    }, 1000);
  }

  readMessageFromChildOne(event) {
    alert(event);
  }
}
