import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { PanelMenuModule } from 'primeng/panelmenu';
import { AppDataService } from '../../layout/service/app.data.service';
import { JSON_DATA_MENU } from '../../app.constants';
import { TranslocoDirective, TranslocoService } from '@jsverse/transloco';
import { RouterModule } from '@angular/router';

@Component({
    standalone: true,
    imports: [TranslocoDirective, RouterModule, PanelMenuModule],
    templateUrl: './main.html'
})
export class Main implements OnInit {
    menu_data: MenuItem[] = [];

    constructor (
        private appDataService: AppDataService
    ) {}

    async ngOnInit(): Promise<void> {
        const data = await this.appDataService.loadTranslatedJSONData(JSON_DATA_MENU);
        this.menu_data = data.navigationMenuItems;
    }
}
