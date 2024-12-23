import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Subscription } from 'rxjs';
import { Certification } from 'src/app/models/certification.model';
import { Education } from 'src/app/models/education.model';
import { Job } from 'src/app/models/job.model';
import { Project } from 'src/app/models/project.model';
import { Skill } from 'src/app/models/skill.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  events: Job[] = [];
  skills: Skill[] = [];
  education: Education[] = [];
  projects: Project[] = [];
  certification: Certification[] = [];

  constructor(private translateService: TranslateService) {
    this.translateService.onLangChange.subscribe(
      newLang => {
        this.ngOnInit();
      }
    );
  }

  ngOnInit(): void {
    this.translateService.get('skills').subscribe(
      translations => {
        this.skills = [
          { title: 'Angular', image: 'angular.png', description: translations.angular },
          { title: 'Vue.js', image: 'vue.png', description: translations.vue },
          { title: 'C#', image: 'csharp.png', description: translations.csharp },
          { title: 'Laravel', image: 'laravel.png', description: translations.laravel },
          { title: 'SQL', image: 'sql.png', description: translations.sql },
          { title: 'Flutter', image: 'flutter.png', description: translations.flutter },
        ];
      }
    );

    this.translateService.get('certification').subscribe(
      translations => {
        this.certification = [
          { title: translations.az1041, dates: translations.az1042, notes: translations.az1043, url: translations.az104url },
          { title: translations.az9001, dates: translations.az9002, notes: translations.az9003, url: translations.az900url },
          { title: translations.sc9001, dates: translations.sc9002, notes: translations.sc9003, url: translations.sc900url },
          { title: translations.ai9001, dates: translations.ai9002, notes: translations.ai9003, url: translations.ai900url }
        ];
      }
    );

    this.translateService.get('education').subscribe(
      translations => {
        this.education = [
          { title: 'Università degli Studi di Parma', period: '2018 - 2023', detail: translations.unipr, abstract: undefined },
          { title: 'ISII G. Marconi', period: '2013 - 2018', detail: translations.isii, abstract: undefined }
        ];
      }
    );


    this.translateService.get('experience').subscribe(
      translations => {
        this.events = [
          { title: 'e-Pol S.R.L.', qualification: translations.ePol_1, dates: translations.ePol_2, description: translations.ePol_3, color: '#003CFFFF' },
          { title: 'LATITUDO S.R.L.', qualification: translations.latitudo2_1, dates: translations.latitudo2_2, description: translations.latitudo2_3, color: '#00BFC5' },
          { title: 'LA BALERA DELL\' ORTICA', qualification: translations.balera1, dates: translations.balera2, description: translations.balera3, color: '#FCFCFC' },
          { title: 'BRAINFARM', qualification: translations.brainfarm1, dates: translations.brainfarm2, description: translations.brainfarm3, color: '#00FFAA' },
          { title: 'LATITUDO S.R.L.', qualification: translations.latitudo1, dates: translations.latitudo2, description: translations.latitudo3, color: '#00BFC5' },
          { title: 'STUDIO LAROSA DANCE', qualification: translations.sld1, dates: translations.sld2, description: translations.sld3, color: '#FFBB00' },
          { title: 'H&S QUALITÀ NEL SOFTWARE S.P.A.', qualification: translations.hs1, dates: translations.hs2, description: translations.hs3, color: '#0A4BFF' },
          { title: 'AMADA ITALIA', qualification: translations.amada1, dates: translations.amada2, description: translations.amada3, color: '#FF0000' },
        ];
      }
    );

    this.translateService.get('projects').subscribe(
      translations => {
        this.projects = [
          { title: 'BARRIERE DI COLLECCHIO', role: translations.bdc1, link: undefined, description: translations.bdc2 },
          { title: 'AGRONOMO', role: translations.agro1, link: 'https://github.com/francesco-rossetti/Agronomo', description: translations.agro2 },
          { title: 'PIACENZA AR', role: translations.pcar1, link: 'https://github.com/francesco-rossetti/PiacenzaProjectAR', description: translations.pcar2 },
          { title: 'ARMATAMENTE 2.0', role: translations.ar201, link: 'https://github.com/francesco-rossetti/Armatamente2', description: translations.ar202 },
          { title: 'MUSEO 3D', role: translations.museo3d1, link: 'http://armatamente.altervista.org/museo/', description: translations.museo3d2 }
        ];
      }
    );
  }

  connectTo(where: string): void {
    if (where === "github") {
      window.open('https://github.com/francesco-rossetti', '_blank');
    } else if (where === 'gplay') {
      window.open('https://play.google.com/store/apps/dev?id=6543884814941375849', '_blank');
    } else if (where === 'link-in') {
      window.open('https://www.linkedin.com/in/francesco-rossetti-9b1243167/', '_blank');
    } else {
      window.open(where);
    }
  }
}
