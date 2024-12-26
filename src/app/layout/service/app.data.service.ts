import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root',
})
export class LayoutService {
    constructor() {}

    public async loadTranslatedJSONData(data_path: string): Promise<string[]> {


        return Promise.resolve([]);
    }
}
