import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { firstValueFrom } from "rxjs";

@Injectable({
    providedIn: 'root',
})
export class AppDataService {
    constructor(
        private httpClient: HttpClient
    ) { }

    public async loadTranslatedJSONData(data_path: string): Promise<any> {
        return await firstValueFrom(this.httpClient.get<any>(data_path));
    }
}
