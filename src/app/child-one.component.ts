import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'child-one',
    template: `
          <span id="name">Child one says: this is from parent: {{ title }}</span>
          <br>
          <child-two [ChildOneToChildTwo]="title"></child-two>
    `,
    styles: ['#name {color: red; font-weight: bold;}']
  })
  
  export class ChildOne implements OnInit{
    
    @Input() parentToChildOne : string;
    @Input() num1 : number;
    @Input() num2 : number;

    title : string = 'Page' ;
    

    ngOnInit() {
        this.title = this.parentToChildOne;
        console.log(this.title);
    }
  }
  