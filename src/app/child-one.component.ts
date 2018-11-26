import { Component, Input, OnInit, OnChanges, SimpleChange, Output, EventEmitter, ViewChild } from '@angular/core';
import { ChildTwo } from './child-two.component';

@Component({
    selector: 'child-one',
    template: `
          <span id="name">Child one says: this is from parent: {{ title }}</span> <br>
          <button (click)="sendMessageToParent()">Click me to see the message from child 1</button>
          <br>
          <child-two [ChildOneToChildTwo]="title" #brother></child-two>
          <br>
          <p>{{brother.message}}</p>
          <p>Sum result from brother component: {{sumResult}}
    `,
    styles: ['#name {color: red; font-weight: bold;}']
  })
  
  export class ChildOne implements OnInit, OnChanges {
    
    @Input() parentToChildOne : string;
    @Input() num1 : number;
    @Input() num2 : number;
    @Output() message = new EventEmitter<string>();
    @ViewChild(ChildTwo) private brother: ChildTwo;
    sumResult: number;

    title : string = 'Page' ;
    changeLog: string[] = [];
    
    constructor() {

    }

    ngOnInit() {
        this.title = this.parentToChildOne;
        console.log(this.title);

        this.sumResult = this.brother.sum(8, 13);
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

    sendMessageToParent() {
      
      this.message.emit('Hello dear parent, this is the message from your first child!'); 
    }
  }
  