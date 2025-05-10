import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { StyleClassModule } from 'primeng/styleclass';
import { TieredMenu } from 'primeng/tieredmenu';
import { LayoutService } from '../service/layout.service';
import { AppDataService } from '../service/app.data.service';
import { JSON_DATA_MENU } from '../../app.constants';
import { TranslocoService, TranslocoModule } from '@jsverse/transloco';

@Component({
    selector: 'app-topbar',
    standalone: true,
    imports: [RouterModule, CommonModule, StyleClassModule, TieredMenu, TranslocoModule],
    template: ` <div class="layout-topbar">
        <div class="layout-topbar-logo-container">
            <button class="layout-menu-button layout-topbar-action" (click)="layoutService.onMenuToggle()">
                <i class="pi pi-bars"></i>
            </button>
            <a class="layout-topbar-logo" routerLink="/">
                <span>Francesco Rossetti</span>
            </a>
        </div>

        <div class="layout-topbar-actions">
            <div class="layout-config-menu">
                <button type="button" class="layout-topbar-action" (click)="tieredMenuLanguages.toggle($event)">
                    <i [ngClass]="{ 'pi ': true, 'pi-language': true }"></i>
                </button>
                <p-tieredmenu #tieredMenuLanguages [model]="lang_menu" [popup]="true" />

                <button type="button" class="layout-topbar-action" (click)="toggleDarkMode()">
                    <i [ngClass]="{ 'pi ': true, 'pi-moon': layoutService.isDarkTheme(), 'pi-sun': !layoutService.isDarkTheme() }"></i>
                </button>
            </div>

            <button class="layout-topbar-menu-button layout-topbar-action" pStyleClass="@next" enterFromClass="hidden" enterActiveClass="animate-scalein" leaveToClass="hidden" leaveActiveClass="animate-fadeout" [hideOnOutsideClick]="true">
                <i class="pi pi-ellipsis-v"></i>
            </button>

            <div class="layout-topbar-menu hidden lg:block">
                <div class="layout-topbar-menu-content">
                </div>
            </div>
        </div>
    </div>`
})
export class AppTopbar implements OnInit {
    lang_menu!: any[];

    constructor(
        private appDataService: AppDataService,
        public layoutService: LayoutService,
        private translocoService: TranslocoService
    ) { }

    async ngOnInit() {
        const data = await this.appDataService.loadTranslatedJSONData(JSON_DATA_MENU);
        this.lang_menu = data.availableLanguages.map((lang: any) => ({
            label: lang.label,
            command: () => this.onLanguageClick(lang.code)
        }));
    }

    onLanguageClick(langCode: string) {
        this.translocoService.setActiveLang(langCode);
    }

    toggleDarkMode() {
        this.layoutService.layoutConfig.update((state) => ({ ...state, darkTheme: !state.darkTheme }));
    }
}
