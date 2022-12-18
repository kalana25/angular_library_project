import { CustomButtonModule } from "custom-button"
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CustomButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
