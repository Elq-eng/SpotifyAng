import { Component, Input, OnInit } from '@angular/core';


import { CommonModule } from '@angular/common';
import { OrderListPipe } from '@shared/pipes/order-list.pipe';
import { TrackModel } from '@core/modles/tracks.model';


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

  optionSort:{ property:string | null, order:string } ={ property:null, order:'asc'}
  @Input() tracks: TrackModel[] =[]

  constructor(){

  }

  ngOnInit(): void {

  }

  changeSort( property: string) :void {
    const { order } = this.optionSort
    this.optionSort = { 
      property,
      order: order === 'asc' ? 'desc' :'asc'
    }
  }

}
