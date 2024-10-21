import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HistoryRoutingModule } from './history-routing.module';
import { FormsModule } from '@angular/forms';
import { SearchComponent } from './components/search/search.component';
import { HistoryPageComponent } from './pages/history-page/history-page.component';


@NgModule({
  declarations: [  ],
  imports: [
    CommonModule,
    HistoryRoutingModule,
    SearchComponent,
    FormsModule
  ]
})
export class HistoryModule { }
