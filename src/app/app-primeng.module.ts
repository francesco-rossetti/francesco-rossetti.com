import { NgModule } from "@angular/core";

import { MenubarModule } from 'primeng/menubar';
import { DividerModule } from 'primeng/divider';

import { InplaceModule } from 'primeng/inplace';
import { ProgressBarModule } from 'primeng/progressbar';
import { CarouselModule } from 'primeng/carousel';

import { CardModule } from 'primeng/card';
import { TimelineModule } from 'primeng/timeline';

import { RippleModule } from "primeng/ripple";
import { ButtonModule } from "primeng/button";

@NgModule({
  imports: [
    MenubarModule,
    DividerModule,
    InplaceModule,
    ProgressBarModule,
    CarouselModule,
    RippleModule,
    ButtonModule,
    CardModule,
    TimelineModule
  ],
  exports: [
    MenubarModule,
    DividerModule,
    InplaceModule,
    ProgressBarModule,
    CarouselModule,
    RippleModule,
    ButtonModule,
    CardModule,
    TimelineModule
  ]
})
export class AppPrimeNGModule { }
