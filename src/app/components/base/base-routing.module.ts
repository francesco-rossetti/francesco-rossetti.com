import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BaseComponent } from './base.component';

@NgModule({
    imports: [RouterModule.forChild([
        { path: '', component: BaseComponent }
    ])],
    exports: [RouterModule]
})
export class BaseRoutingModule { }
