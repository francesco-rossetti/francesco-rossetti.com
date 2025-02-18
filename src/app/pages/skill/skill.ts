import { Component, OnInit } from '@angular/core';
import { DividerModule } from 'primeng/divider';
import { CardModule } from 'primeng/card';
import { AppDataService } from '../../layout/service/app.data.service';
import { JSON_DATA_SKILL, LOGO_PATH } from '../../app.constants';
import { TranslocoDirective } from '@jsverse/transloco';
import { RouterModule } from '@angular/router';
import { SkillModel } from '../../models/skill.model';

@Component({
    standalone: true,
    imports: [TranslocoDirective, RouterModule, CardModule, DividerModule],
    templateUrl: './skill.html'
})
export class Skill implements OnInit {
    page_data: SkillModel[] = [];
    LOGO_PATH = LOGO_PATH.valueOf();

    constructor (
        private appDataService: AppDataService
    ) {}

    async ngOnInit(): Promise<void> {
        const data = await this.appDataService.loadTranslatedJSONData(JSON_DATA_SKILL);
        this.page_data = data.skill;
    }
}
