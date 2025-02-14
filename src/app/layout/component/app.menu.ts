import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { AppMenuitem } from './app.menuitem';
import { Translation, TranslocoPipe, TranslocoService } from '@jsverse/transloco';
import { AppDataService } from '../service/app.data.service';
import { JSON_DATA_MENU } from '../../app.constants';

@Component({
    selector: 'app-menu',
    standalone: true,
    imports: [CommonModule, AppMenuitem, RouterModule],
    providers: [TranslocoPipe],
    template: `<ul class="layout-menu">
        <ng-container *ngFor="let item of model; let i = index">
            <li app-menuitem *ngIf="!item.separator" [item]="item" [index]="i" [root]="true"></li>
            <li *ngIf="item.separator" class="menu-separator"></li>
        </ng-container>
    </ul> `
})
export class AppMenu {
    constructor(
        private appDataService: AppDataService,
        private transloco: TranslocoPipe
    ) {}

    model: MenuItem[] = [];

    ngOnInit() {
        this.loadTranslations();
    }

    async loadTranslations(): Promise<void> {
        const data = await this.appDataService.loadTranslatedJSONData(JSON_DATA_MENU);
        const menu_data = data.navigationMenuItems;

        const items: MenuItem[] = [];

        for (const element of menu_data) {
            items.push({
                label: this.transloco.transform(element.label),
                icon: element.icon ?? '',
                routerLink: [ element.route ]
            });
        }

        const topLevelTran: string = this.transloco.transform('menu.toplevel');

        this.model = [
            {
                label: topLevelTran,
                items: items
            }
        ];
    }
}
