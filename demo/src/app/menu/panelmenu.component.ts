import {Component} from '@angular/core';
import {PanelMenuModule} from 'primeng/panelmenu';
import {MenuItem} from 'primeng/api';

@Component({
    selector:'menu',
    templateUrl: './panelmenu.component.html',
    styleUrls:['./panelmenu.component.css']
})

export class PanelMenu {  
    items: MenuItem[];

    ngOnInit() {
        this.items = [
            {
                label: 'Cuenta',
                icon: 'fa fa-fw fa-user',
                items: [{
                        label: 'Configuración', 
                        icon: 'fa fa-fw fa-gear',
                        items: [
                            {label: 'Project', icon: 'fa fa-fw fa-lock'},
                            {label: 'Other', icon: 'fa fa-fw fa-list'}
                        ]
                    },
                    {label: 'Abrir', icon: 'fa fa-fw fa-external-link'},
                    {separator: true},
                    {label: 'Salir', icon: 'fa fa-fw fa-close'}
                ]
            },
            {
                label: 'Cursos',
                icon: 'fa fa-fw fa-edit',
                items: [
                    {label: 'Undo', icon: 'fa fa-fw fa-mail-forward'},
                    {label: 'Redo', icon: 'fa fa-fw fa-mail-reply'}
                ]
            },
            {
                label: 'Calendario',
                icon: 'fa fa-fw fa-calendar'
            },
            {
                label: 'Ayuda',
                icon: 'fa fa-fw fa-question',
                items: [
                    {
                        label: 'Contents',
                        icon: 'fa fa-fw fa-bars'
                    },
                    {
                        label: 'Search', 
                        icon: 'fa fa-fw fa-search', 
                        items: [
                            {
                                label: 'Text', 
                                items: [
                                    {
                                        label: 'Workspace'
                                    }
                                ]
                            },
                            {
                                label: 'File',
                                icon: 'fa fa-fw fa-file',
                            }
                    ]}
                ]
            },
        ];
    }
}