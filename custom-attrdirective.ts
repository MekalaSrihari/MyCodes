import{ Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
    selector:'[customhover]'
})

export class hoverDirective{

   @Input() customhover:string;
    constructor(private el:ElementRef){
        //el.nativeElement.style.backgroundColor='orange';
    }
@HostListener('mouseenter') onMouseEnter(){
    this.hilightColor(this.customhover);
}
@HostListener('mouseleave') onMouseLeave(){
    this.hilightColor('green');
}
    public hilightColor(color:string){
        this.el.nativeElement.style.backgroundColor= color;
        }
}