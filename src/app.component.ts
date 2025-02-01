import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LayoutService } from './app/layout/service/layout.service';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [RouterModule],
    template: `<router-outlet></router-outlet>`
})
export class AppComponent implements OnInit {
    constructor (private layoutService: LayoutService) {}

    ngOnInit(): void {
        this.layoutService.layoutConfig.update((state) => ({ ...state, darkTheme: true }));
    }
}
