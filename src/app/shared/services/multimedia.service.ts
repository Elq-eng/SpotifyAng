import { Injectable,EventEmitter } from '@angular/core';
import { TrackModel } from '@core/modles/tracks.model';
import { BehaviorSubject, min, Observable, Observer, Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class MultimediaService {

  callback: EventEmitter<any> = new EventEmitter<any>()
  myObservable1$: Subject<any> = new Subject()

  public trackInfo$: BehaviorSubject<any> = new BehaviorSubject( undefined )
  public audio!: HTMLAudioElement 

  public timeElapsed$: BehaviorSubject<any> = new BehaviorSubject( '00:00'); 
  public timeRemaining$: BehaviorSubject<any> = new BehaviorSubject( '-00:00'); 
  public playerStatus$: BehaviorSubject<string> = new BehaviorSubject( 'paused'); 
  public playerPercentage$: BehaviorSubject<number> = new BehaviorSubject(0)

  constructor() { 
    this.audio = new Audio()
    this.trackInfo$.subscribe( resp => {
      this.setAudio(resp)
    })

    this.listenAllEvents()
  }

  public setAudio( track: TrackModel):void {
    if (track && track.url) {
      console.log(track)
      this.audio.src = track.url;
      this.audio.play()
    }
  }

  private listenAllEvents():void {
    this.audio.addEventListener('timeupdate',this.calculateTime, false)
    this.audio.addEventListener('playing',this.setPlayerStatus, false)
    this.audio.addEventListener('play',this.setPlayerStatus, false)
    this.audio.addEventListener('pause',this.setPlayerStatus, false)
    this.audio.addEventListener('ended',this.setPlayerStatus, false)
    

  } 


  private calculateTime = ():void => {
    const { duration, currentTime } = this.audio
    this.setTimeElapsed(currentTime)
    this.setTimeRemaining(currentTime, duration)
    this.setPercentage(currentTime, duration)
  }

  private setTimeElapsed(currentTime: number ): void {

    let seconds = Math.floor( currentTime % 60)
    let minutes =Math.floor( (currentTime / 60) % 60)

    const displaySeconds = ( seconds < 10 )? `0${ seconds }` : seconds;
    const displayMinutes = ( minutes < 10 )? `0${ minutes }` : minutes;


    const displayFormt = `${ displayMinutes } : ${displaySeconds}`
    this.timeElapsed$.next(displayFormt)

  }

  private setTimeRemaining( currentTime: number, duration: number  ): void {

    let timeLeft = duration - currentTime;

    let seconds = Math.floor( timeLeft % 60)
    let minutes =Math.floor( (timeLeft / 60) % 60)
    const displaySeconds = ( seconds < 10 )? `0${ seconds }` : seconds;
    const displayMinutes = ( minutes < 10 )? `0${ minutes }` : minutes;


    const displayFormt = `-${ displayMinutes } : ${displaySeconds}`
    this.timeRemaining$.next(displayFormt)
  }

  private setPlayerStatus = (state: any) => {
    switch (state.type) { 
      case 'play':
        this.playerStatus$.next('play')
        break
      case 'playing':
        this.playerStatus$.next('playing')
        break
      case 'ended':
        this.playerStatus$.next('ended')
        break
      default:
        this.playerStatus$.next('paused')
        break;
    }

  }


  private setPercentage(currentTime: number, duration: number): void {
    let percentage = (currentTime * 100) / duration;
    this.playerPercentage$.next(percentage)
  }
  public togglePlayer ():void {
    (this.audio.paused) ? this.audio.play() : this.audio.pause()
  }

  public seekAudio(percentage: number): void {
    const { duration } = this.audio
    const percentageToSecond = (percentage * duration) / 100
    this.audio.currentTime = percentageToSecond

  }




}
