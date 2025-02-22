import { Component, OnInit } from '@angular/core';
import { DividerModule } from 'primeng/divider';
import { CardModule } from 'primeng/card';
import { AppDataService } from '../../layout/service/app.data.service';
import { JSON_DATA_PROJECT, LOGO_PATH } from '../../app.constants';
import { TranslocoDirective } from '@jsverse/transloco';
import { RouterModule } from '@angular/router';
import { ProjectModel } from '../../models/project.model';

@Component({
    standalone: true,
    imports: [TranslocoDirective, RouterModule, CardModule, DividerModule],
    templateUrl: './project.html'
})
export class Project implements OnInit {
    page_data: ProjectModel[] = [];
    LOGO_PATH = LOGO_PATH.valueOf();

    constructor (
        private appDataService: AppDataService
    ) {}

    async ngOnInit(): Promise<void> {
        const data = await this.appDataService.loadTranslatedJSONData(JSON_DATA_PROJECT);
        this.page_data = data.project;
    }

    connectTo(siteURL: string): void {
        window.open(siteURL, '_blank');
    }
}
