import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
// import { CodekulComponent } from './codekul/codekul.component';


@NgModule({
  declarations: [
    AppComponent,
  //   CodekulComponent
  //
 ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
