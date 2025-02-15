import { Routes } from '@angular/router';
import { Main } from './main/main';
import { Education } from './education/education';
import { Experience } from './experience/experience';

export default [
    { path: '', component: Main },
    { path: 'education', component: Education },
    { path: 'experiences', component: Experience },
] as Routes;
