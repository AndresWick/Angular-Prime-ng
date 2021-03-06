import {RouterModule,Routes} from '@angular/router';


import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {ButtonModule} from 'primeng/button';
import {MenuModule} from 'primeng/menu';
import {PanelMenuModule} from 'primeng/panelmenu';
import {PanelModule } from 'primeng/components/panel/panel';
import {RadioButtonModule } from 'primeng/components/radioButton/radioButton';
import {BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {TabMenuModule} from 'primeng/tabmenu';


import {PanelMenu} from './menu/panelmenu.component';
import {Footer} from './footer/footer.component';
import {CuentaComponent} from './cuenta/cuenta.component';
import {CursosComponent} from './cursos/cursos.component';
import {CalendarioComponent} from './calendario/calendario.component';


import {AccordionModule} from 'primeng/accordion';     //accordion and accordion tab

const routes: Routes=[
  {path:'cuenta',component:CuentaComponent},
  {path:'cursos',component:CursosComponent},
  {path:'calendario',component:CalendarioComponent},
  {path:'',component:AppComponent,pathMatch:'full'},
  {path:'**',redirectTo:'/',pathMatch:'full'}
];

@NgModule({
  declarations: [
    AppComponent,
    PanelMenu,
    Footer,
    CuentaComponent,
    CursosComponent,
    CalendarioComponent 
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
    TabMenuModule,
    RouterModule.forRoot(routes)
    ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }