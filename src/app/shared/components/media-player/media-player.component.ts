import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { TrackModel } from '@core/modles/tracks.model';

@Component({
  selector: 'app-media-player',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './media-player.component.html',
  styleUrl: './media-player.component.css'
})
export class MediaPlayerComponent implements OnInit {


  mockCover: TrackModel ={
    cover:'https://i.scdn.co/image/ab67616d0000b27345ca41b0d2352242c7c9d4bc',
    album:'Gioli & Assia',
    name:' BEBE( Oficial',
    url: 'http://localhost/track.mp3',
    _id: 1
  }

  constructor () {

  }
  ngOnInit(): void {
     
  }

}
