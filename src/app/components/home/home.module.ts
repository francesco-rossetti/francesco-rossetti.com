import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PanelMenuModule } from 'primeng/panelmenu';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';

@NgModule({
    imports: [
        CommonModule,

        PanelMenuModule,

        HomeRoutingModule
    ],
    declarations: [HomeComponent]
})
export class HomeModule { }
