import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { BazLibModule } from 'baz-lib';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BazLibModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
