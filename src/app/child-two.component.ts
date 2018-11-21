import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'child-two',
    template: `
          <span id="data">Child two says: this is from child one: {{ data }}</span>
    `,
    styles: ['#data {color: blue; font-weight: bold;}']
  })
  
  export class ChildTwo implements OnInit{
    @Input() ChildOneToChildTwo : string;
    data : string = 'data' ;
    

    ngOnInit() {
        this.data = this.ChildOneToChildTwo;
    }
  }
  