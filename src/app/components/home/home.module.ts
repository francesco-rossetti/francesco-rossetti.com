import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslocoRootModule } from 'src/app/transloco-root.module';

import { PanelMenuModule } from 'primeng/panelmenu';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';

@NgModule({
    imports: [
        CommonModule,
        TranslocoRootModule,

        PanelMenuModule,

        HomeRoutingModule
    ],
    declarations: [HomeComponent]
})
export class HomeModule { }
