import { Component } from '@angular/core';

@Component({
    standalone: false,
    templateUrl: './home.component.html'
})
export class HomeComponent {
    json_data_translated: string[] = [];

    constructor () {

    }
}
