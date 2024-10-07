import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { TrackModel } from '@core/modles/tracks.model';
import { MultimediaService } from '@shared/services/multimedia.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-media-player',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './media-player.component.html',
  styleUrl: './media-player.component.css'
})
export class MediaPlayerComponent implements OnInit, OnDestroy {


  mockCover: TrackModel ={
    cover:'https://i.scdn.co/image/ab67616d0000b27345ca41b0d2352242c7c9d4bc',
    album:'Gioli & Assia',
    name:' BEBE( Oficial )',
    url: 'http://localhost/track.mp3',
    _id: 1
  }

  listObservers$ : Array<Subscription> = []

  constructor (private _multimediaService: MultimediaService) {  }
  
  ngOnInit(): void {
    const observer1$: Subscription = this._multimediaService.callback.subscribe(
      ( response: TrackModel ) =>{
        console.log('Recibiendo cancion...', response)
      }
    )
    this.listObservers$  = []
  }

  ngOnDestroy(): void {
    this.listObservers$.forEach( u => u.unsubscribe() )
    console.log()
  }


}
