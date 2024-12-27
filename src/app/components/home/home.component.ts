import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { JSON_DATA_HOME } from 'src/app/app.constants';
import { AppDataService } from 'src/app/layout/service/app.data.service';

@Component({
    standalone: false,
    templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {
    menu_data: MenuItem[] = [];

    constructor (
        private appDataService: AppDataService
    ) {}

    async ngOnInit(): Promise<void> {
        const data = await this.appDataService.loadTranslatedJSONData(JSON_DATA_HOME);
        
        this.menu_data = data.navigationMenuItems;
    }
}
