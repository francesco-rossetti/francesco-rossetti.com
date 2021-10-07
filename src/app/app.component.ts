import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

import { filter } from 'rxjs/operators';

import { PrimeNGConfig } from 'primeng/api';
import { MenuItem } from 'primeng/api';

import cssVars from 'css-vars-ponyfill';
import { TranslateService } from '@ngx-translate/core';

declare var gtag: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Francesco Rossetti';
  menuItems: MenuItem[] = [];

  constructor(private primeNGConfig: PrimeNGConfig,
    private translateService: TranslateService,
    private router: Router) {
    cssVars();

    const navEndEvents = router.events.pipe(
      filter(event => event instanceof NavigationEnd),
    );

    navEndEvents.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        gtag('config', 'G-8YTLNWLQYM'), {
          'page_path': event.urlAfterRedirects
        };
      }
    });

    this.primeNGConfig.ripple = true;
    translateService.addLangs(['en', 'it']);
    this.translateService.setDefaultLang('en');
  }

  ngOnInit() {
    this.translateService.get('primeng').subscribe(res => this.primeNGConfig.setTranslation(res));

    this.translateService.get('menuItems').subscribe(
      translations => {
        this.menuItems = [
          {
            label: translations.home,
            url:'/'
          },
          {
            label: translations.skills,
            url: '#skills'
          },
          {
            label: translations.certification,
            url: '#certification'
          },
          {
            label: translations.education,
            url: '#education'
          },
          {
            label: translations.experience,
            url: '#experience'
          },
          {
            label: translations.projects,
            url: '#projects'
          },
          {
            label: translations.privacypolicy,
            url: '/privacypolicy'
          },
        ];
      }
    )
  }

  onActivate() {
    window.scroll(0, 0);
  }

  changeLang(lang: string): void {
    if (lang === "it") {
      this.translateService.use('it');
      this.translateService.reloadLang('it');
      this.ngOnInit();
    } else if (lang === "en") {
      this.translateService.use('en');
      this.translateService.reloadLang('en');
      this.ngOnInit();
    }
  }
}
