import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LogsComponent } from './components/logs/logs.component';

@NgModule({
  imports: [BrowserModule],
  declarations: [
    AppComponent,
    LogsComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
