import { Routes } from '@angular/router';
import { Main } from './main/main';
import { Education } from './education/education';
import { Experience } from './experience/experience';
import { Skill } from './skill/skill';
import { Certification } from './certification/certification';
import { Project } from './project/project';

export default [
    { path: '', component: Main },
    { path: 'education', component: Education },
    { path: 'experiences', component: Experience },
    { path: 'skills', component: Skill },
    { path: 'certifications', component: Certification },
    { path: 'projects', component: Project }
] as Routes;
