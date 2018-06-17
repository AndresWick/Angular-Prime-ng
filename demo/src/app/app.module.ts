import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {ButtonModule} from 'primeng/button';
import {MenuModule} from 'primeng/menu';
import {PanelMenuModule} from 'primeng/panelmenu';
import { PanelModule } from 'primeng/components/panel/panel';
import { RadioButtonModule } from 'primeng/components/radioButton/radioButton';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {TabMenuModule} from 'primeng/tabmenu';


import {PanelMenu} from './menu/panelmenu.component'
import {TabView} from './tabview/tabview.component';

import {AccordionModule} from 'primeng/accordion';     //accordion and accordion tab
@NgModule({
  declarations: [
    AppComponent,
    PanelMenu,
    TabView
  ],
  imports: [
    BrowserModule,
    ButtonModule,
    MenuModule,
    PanelMenuModule,
    AccordionModule,
    BrowserAnimationsModule,
    PanelModule,
    RadioButtonModule,
    TabMenuModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }