import { Component, OnDestroy, OnInit } from '@angular/core';
import { SectionGenericComponent } from "../../../../shared/components/section-generic/section-generic.component";

import { TrackModel } from '@core/modles/tracks.model';
import { TrackService } from '@modules/tracks/services/track.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-tracks-page',
  standalone: true,
  imports: [SectionGenericComponent],
  templateUrl: './tracks-page.component.html',
  styleUrl: './tracks-page.component.css'
})
export class TracksPageComponent implements OnInit, OnDestroy {

  TracksTrending: Array<TrackModel> = [  ]
  trackRandom: Array<TrackModel> = [  ]

  listObserver$: Array<Subscription> = []

  constructor(private trackService: TrackService){}

  ngOnInit():void{
    this.loadDataAll();
    this.loadDatRandom()
  }

  loadDataAll ():void{
    this.trackService.getAllTracks$()
    .subscribe( resp => {

      this.TracksTrending = resp
    })
  }


  loadDatRandom ():void{
    this.trackService.getAllRandom$()
      .subscribe( resp => {
        this.trackRandom = resp
      }, err=>{
        console.log('error de conexion')
      })
  }

  ngOnDestroy():void{

  }

}
