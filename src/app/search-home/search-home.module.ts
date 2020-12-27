import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchHomeComponent } from './search-home.component';



@NgModule({
  declarations: [
    SearchHomeComponent
  ],
  exports: [
    SearchHomeComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SearchHomeModule { }
