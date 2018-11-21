import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ChildOne } from './child-one.component';
import { ChildTwo } from './child-two.component';

@NgModule({
  declarations: [
    AppComponent,
    ChildOne,
    ChildTwo
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
