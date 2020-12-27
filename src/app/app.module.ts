import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SearchHomeModule } from './search-home/search-home.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    SearchHomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
