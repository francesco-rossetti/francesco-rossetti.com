import { Component, OnInit } from '@angular/core';
import { DividerModule } from 'primeng/divider';
import { CardModule } from 'primeng/card';
import { AppDataService } from '../../layout/service/app.data.service';
import { JSON_DATA_EDUCATION } from '../../app.constants';
import { TranslocoDirective, TranslocoService } from '@jsverse/transloco';
import { RouterModule } from '@angular/router';
import { EducationModel } from '../../models/education.model';
import { ButtonModule } from 'primeng/button';

@Component({
    standalone: true,
    imports: [TranslocoDirective, RouterModule, ButtonModule, CardModule, DividerModule],
    templateUrl: './education.html'
})
export class Education implements OnInit {
    page_data: EducationModel[] = [];

    constructor (
        private appDataService: AppDataService
    ) {}

    async ngOnInit(): Promise<void> {
        const data = await this.appDataService.loadTranslatedJSONData(JSON_DATA_EDUCATION);
        this.page_data = data.education;
    }

    connectTo(siteURL: string): void {
        window.open(siteURL, '_blank');
    }
}
