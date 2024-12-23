import { Component, OnInit } from '@angular/core';
import { PrimeNG } from 'primeng/config';
import { LayoutService } from './layout/service/app.layout.service';

@Component({
    standalone: false,
    selector: 'app-root',
    templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {

    constructor(
        private primengConfig: PrimeNG,
        private layoutService: LayoutService
    ) { }

    ngOnInit() {
        this.primengConfig.ripple.set(true);

        this.layoutService.config.update((config) => ({
            ...config,
            theme: 'bootstrap4-dark-blue',
        }));
    }
}
