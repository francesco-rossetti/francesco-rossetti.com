import { Routes } from '@angular/router';
import { Main } from './main/main';

export default [
    { path: '', component: Main },
    { path: '**', redirectTo: '/notfound' }
] as Routes;
