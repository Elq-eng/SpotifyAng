import { Component, OnInit } from '@angular/core';
import * as dataRaw from '../../../data/track.json'
import { TrackModel } from '@core/modles/tracks.model';
import { CommonModule } from '@angular/common';
import { OrderListPipe } from '@shared/pipes/order-list.pipe';


@Component({
  selector: 'app-play-list-body',
  standalone: true,
  imports: [
    CommonModule,
    OrderListPipe
  ],
  templateUrl: './play-list-body.component.html',
  styleUrl: './play-list-body.component.css'
})
export class PlayListBodyComponent implements OnInit {

  optionSort:{ property:string | null, order:string } ={ property:'name', order:'asc'}
  tracks: TrackModel[] =[]

  constructor(){}

  ngOnInit(): void {
    const { data }: any = ( dataRaw as any).default
    this.tracks = data
  }

  changeSort( property: string) :void {
    const { order } = this.optionSort
    this.optionSort = { 
      property,
      order: order === 'asc' ? 'desc' :'asc'
    }
  }

}
