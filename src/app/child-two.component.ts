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
    message: string = 'Hello dear brother!! How are you?';
    

    ngOnInit() {
        this.data = this.ChildOneToChildTwo;
    }

    sum (num1: number, num2: number) : number {
        if (num1 && num2) {
            return num1 + num2;
        } else {
            return 0;
        }
    }
  }
  