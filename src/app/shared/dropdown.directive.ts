import { Directive, HostBinding, HostListener, ElementRef } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {

  @HostBinding('class.open') isOpen = false;

 @HostListener('click') toggleOpen(){
   this.isOpen = !this.isOpen;
 }
 constructor(private elRef: ElementRef){}

}
