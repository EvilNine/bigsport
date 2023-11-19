import { Directive, HostBinding, HostListener, Input } from '@angular/core';

@Directive({
  selector: 'img[default]'
})
export class ImagePreloadDirective {

  @Input()
  @HostBinding('src')
  src: string;

  @Input() fallback: string

  @HostListener('error')

  onError() {
    this.src = '../assets/default.png'
  }

}
