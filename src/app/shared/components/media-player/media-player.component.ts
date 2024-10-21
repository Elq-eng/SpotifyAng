import { CommonModule } from '@angular/common';
import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { TrackModel } from '@core/modles/tracks.model';
import { MultimediaService } from '@shared/services/multimedia.service';
import { error } from 'console';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-media-player',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './media-player.component.html',
  styleUrl: './media-player.component.css'
})
export class MediaPlayerComponent implements OnInit, OnDestroy {

  @ViewChild('progressBar') progressBar: ElementRef = new ElementRef('')


  mockCover: TrackModel ={}
  listObservers$ : Array<Subscription> = []
  state:string = 'paused'

  constructor (public _multimediaService: MultimediaService) { 
  
  }
  
  ngOnInit(): void {
    const observable1$ = this._multimediaService.playerStatus$
    .subscribe( status => this.state = status)

    this.listObservers$ = [ observable1$ ]
  }

  ngOnDestroy(): void {
    this.listObservers$.forEach( u => u.unsubscribe() )
    console.log()
  }


  handlePosition(event: MouseEvent): void {
    const elNative: HTMLElement = this.progressBar.nativeElement
    const { clientX } = event
    const { x, width } = elNative.getBoundingClientRect()
    const clickX = clientX - x //TODO: 1050 - x
    const percentageFromX = (clickX * 100) / width
    console.log(`Click(x): ${percentageFromX}`);
    this._multimediaService.seekAudio(percentageFromX)

  }

}
