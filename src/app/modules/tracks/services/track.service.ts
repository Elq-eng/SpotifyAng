import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TrackModel } from '@core/modles/tracks.model';
import { Observable, of } from 'rxjs';
import { environment } from 'src/enviroments/enviroment';


@Injectable({
  providedIn: 'root'
})
export class TrackService {

  private readonly URL = environment.api;

  constructor( private httpClient: HttpClient) { }

  getAllTracks$(): Observable<any>{

    return this.httpClient.get(`${this.URL}/tracks`)
  }
}
