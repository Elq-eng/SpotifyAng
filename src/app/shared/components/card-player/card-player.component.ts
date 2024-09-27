import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { TrackModel } from '@core/modles/tracks.model';
import { ImgBrokenDirective } from '@shared/directives/img-broken.directive';

@Component({
  selector: 'app-card-player',
  standalone: true,
  imports: [CommonModule, ImgBrokenDirective],
  templateUrl: './card-player.component.html',
  styleUrl: './card-player.component.css'
})
export class CardPlayerComponent implements OnInit{

  @Input() mode: 'small'| 'big' = 'small';
  @Input() track: TrackModel = { _id:0, name:'', album:'',url:'', cover:''};

  constructor(){}

  ngOnInit(): void {

  }

}
