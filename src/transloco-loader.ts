import { inject, Injectable } from "@angular/core";
import { Translation, TranslocoLoader } from "@jsverse/transloco";
import { HttpClient } from "@angular/common/http";
import { tap } from "rxjs";

@Injectable({ providedIn: 'root' })
export class TranslocoHttpLoader implements TranslocoLoader {
    private http = inject(HttpClient);

    getTranslation(lang: string) {
        return this.http.get<Translation>(`/i18n/${lang}.json`).pipe(
            tap((response) => console.log(`Translation for ${lang}:`, response))
        );
    }
}
