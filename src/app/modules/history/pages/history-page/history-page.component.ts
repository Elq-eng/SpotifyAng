import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TrackModel } from '@core/modles/tracks.model';
import { SearchComponent } from '@modules/history/components/search/search.component';
import { SearchService } from '@modules/history/services/search.service';
import { PlayListBodyComponent } from '@shared/components/play-list-body/play-list-body.component';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-history-page',
  standalone: true,
  imports: [
    CommonModule,
    SearchComponent,
    PlayListBodyComponent
  ],
  templateUrl: './history-page.component.html',
  styleUrl: './history-page.component.css'
})
export class HistoryPageComponent {
  listResult$: Observable<any> = of([])

  constructor(private searchServices: SearchService){

  }

  receiveData( event: string):void {
    if(!!event) this.listResult$ = this.searchServices.searchTracks$(event)
  }

}
