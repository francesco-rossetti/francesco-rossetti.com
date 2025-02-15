import { Component, OnInit } from '@angular/core';
import { DividerModule } from 'primeng/divider';
import { CardModule } from 'primeng/card';
import { AppDataService } from '../../layout/service/app.data.service';
import { JSON_DATA_EXPERIENCE } from '../../app.constants';
import { TranslocoDirective } from '@jsverse/transloco';
import { RouterModule } from '@angular/router';
import { ExperienceModel } from '../../models/experience.model';

@Component({
    selector: 'app-experience',
    standalone: true,
    imports: [TranslocoDirective, RouterModule, CardModule, DividerModule],
    templateUrl: './experience.html'
})
export class Experience implements OnInit {
    page_data: ExperienceModel[] = [];

    constructor (
        private appDataService: AppDataService
    ) {}

    async ngOnInit(): Promise<void> {
        const data = await this.appDataService.loadTranslatedJSONData(JSON_DATA_EXPERIENCE);
        this.page_data = data.experience;
    }
}
