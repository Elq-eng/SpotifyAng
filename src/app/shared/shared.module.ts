import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PlayListBodyComponent } from './components/play-list-body/play-list-body.component';




@NgModule({
  declarations: [
    
  ],
  imports: [
    CommonModule,
    RouterModule,
    PlayListBodyComponent
  ],
  exports:[
    PlayListBodyComponent
  ]
})
export class SharedModule { }
