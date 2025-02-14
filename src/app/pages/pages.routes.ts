import { Routes } from '@angular/router';
import { Main } from './main/main';
import { Education } from './education/education';

export default [
    { path: '', component: Main },
    { path: 'education', component: Education },
] as Routes;
