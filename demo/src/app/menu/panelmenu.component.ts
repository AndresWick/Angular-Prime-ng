import {Component} from '@angular/core';
import {PanelMenuModule} from 'primeng/panelmenu';
import {MenuItem} from 'primeng/api';

@Component({
    selector:'menu',
    template: `
        <h1>{{nombre}}</h1> 
        <p-panelMenu [model]="items" [style]="{'width':'300px'}"></p-panelMenu>
        `
})

export class PanelMenu {
    public nombre='Menú LMS';
  
    items: MenuItem[];

    ngOnInit() {
        this.items = [
            {
                label: 'File',
                icon: 'fa fa-fw fa-file-o',
                items: [{
                        label: 'New', 
                        icon: 'fa fa-fw fa-plus',
                        items: [
                            {label: 'Project', icon: 'fa fa-fw fa-lock'},
                            {label: 'Other', icon: 'fa fa-fw fa-list'}
                        ]
                    },
                    {label: 'Open', icon: 'fa fa-fw fa-external-link'},
                    {separator: true},
                    {label: 'Quit', icon: 'fa fa-fw fa-close'}
                ]
            },
            {
                label: 'Edit',
                icon: 'fa fa-fw fa-edit',
                items: [
                    {label: 'Undo', icon: 'fa fa-fw fa-mail-forward'},
                    {label: 'Redo', icon: 'fa fa-fw fa-mail-reply'}
                ]
            },
            {
                label: 'Help',
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
            {
                label: 'Actions',
                icon: 'fa fa-fw fa-gear',
                items: [
                    {
                        label: 'Edit',
                        icon: 'fa fa-fw fa-refresh',
                        items: [
                            {label: 'Save', icon: 'fa fa-fw fa-save'},
                            {label: 'Update', icon: 'fa fa-fw fa-save'},
                        ]
                    },
                    {
                        label: 'Other',
                        icon: 'fa fa-fw fa-phone',
                        items: [
                            {label: 'Delete', icon: 'fa fa-fw fa-minus'}
                        ]
                    }
                ]
            }
        ];
    }
}