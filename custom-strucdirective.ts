import { Directive, Input, TemplateRef, ViewContainerRef} from '@angular/core';

@Directive({
    selector:'[hidethisElement]'
})

export class strucDirective{

    constructor(private templateRef:TemplateRef<any>,
                private viewContainer:ViewContainerRef){
                    
    }

    @Input() set hidethisElement(isHidden:boolean){

        if(!isHidden){
            this.viewContainer.createEmbeddedView(this.templateRef);
        } else if (isHidden){
            this.viewContainer.clear();
        }


    }

}
