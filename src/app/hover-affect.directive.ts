import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHoverAffect]',
})
export class HoverAffectDirective {
  @Input() tag: boolean = false;

  @HostListener('mouseover') mouseEnter() {
    if(this.tag){
      this.bold();
    }else{
      this.underline();
    }
  }

  @HostListener('mouseout') mouseout() {
    if(this.tag){
      this.removeBold();
    }else{
      this.removeUnderline();
    }
  }

  bold(){
    this.elm.nativeElement.style.fontWeight = 'bold';
  }

  removeBold(){
    this.elm.nativeElement.style.fontWeight = 'normal';
  }

  underline() {
    this.elm.nativeElement.style.textDecoration = 'underline';
  }
  removeUnderline() {
    this.elm.nativeElement.style.textDecoration = '';
  }

  constructor(private elm: ElementRef) {}
}
