import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: 'img[appImgBroken]',
  standalone: true
})
export class ImgBrokenDirective {
  @Input() customImg: string = ''
  @HostListener('error') handleError():void {
    const elNative = this.elhost.nativeElement
    console.log('esta imagen revento --->')
    elNative.src = this.customImg
  }

  constructor( private elhost: ElementRef ) { }

}
