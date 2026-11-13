import { Directive, ElementRef, HostListener, OnInit } from '@angular/core';

@Directive({
  selector: '[appTest]',
})
export class Test implements OnInit{
  constructor(private element:ElementRef) {}

  ngOnInit(): void {
    
    
  }

  @HostListener('mouseenter') func(){
    (this.element.nativeElement as HTMLElement).classList.add('text-white','bg-blue-500')
  }
}
