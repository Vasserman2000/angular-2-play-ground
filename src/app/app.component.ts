import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
          <child-one
           [parentToChildOne]="title"></child-one>
  `,
  styles: []
})

export class AppComponent {
  title = 'שלום';
}
