import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appClass]'
})
export class ClassDirective {

  @Input() color: string = '';

  constructor(private element: ElementRef) {
    this.element.nativeElement.style.backgroundColor = this.color;
    console.log('Class Directive IN USE')
  }

}
