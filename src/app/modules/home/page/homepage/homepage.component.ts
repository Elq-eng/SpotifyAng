import { Component } from '@angular/core';
import { SideBarComponent } from "@shared/components/side-bar/side-bar.component";
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MediaPlayerComponent } from '@shared/components/media-player/media-player.component';

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [SideBarComponent, MediaPlayerComponent,CommonModule,RouterModule],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.css'
})
export class HomepageComponent {

}
