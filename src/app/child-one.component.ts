import { Component, Input, OnInit, OnChanges, SimpleChange } from '@angular/core';

@Component({
    selector: 'child-one',
    template: `
          <span id="name">Child one says: this is from parent: {{ title }}</span>
          <br>
          <child-two [ChildOneToChildTwo]="title"></child-two>
    `,
    styles: ['#name {color: red; font-weight: bold;}']
  })
  
  export class ChildOne implements OnInit, OnChanges {
    
    @Input() parentToChildOne : string;
    @Input() num1 : number;
    @Input() num2 : number;

    title : string = 'Page' ;
    changeLog: string[] = [];
    

    ngOnInit() {
        this.title = this.parentToChildOne;
        console.log(this.title);
    }

    ngOnChanges(changes: {[propKey: string]: SimpleChange}) {
      let log: string[] = [];
      for (let propName in changes) {
        let changedProp = changes[propName];
        let to = JSON.stringify(changedProp.currentValue);
        if (changedProp.isFirstChange()) {
          log.push(`Initial value of ${propName} set to ${to}`);
        } else {
          let from = JSON.stringify(changedProp.previousValue);
          log.push(`${propName} changed from ${from} to ${to}`);
        }
      }
      this.changeLog.push(log.join(', '));
    }
  }
  