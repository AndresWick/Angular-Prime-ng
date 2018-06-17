import {Component} from '@angular/core';
import {AccordionModule} from 'primeng/accordion';

@Component({
    selector:'tabview',
    template: `
    <p-accordion>
    <p-accordionTab header="Header 1">
       Content 1
    </p-accordionTab>
    <p-accordionTab header="Header 2">
        Content 2
    </p-accordionTab>
    <p-accordionTab header="Header 3">
        Content 3    
    </p-accordionTab>
</p-accordion>    `,
    styleUrls:['./tabview.component.css']
})

export class TabView {  
    
}