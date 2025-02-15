import { Routes } from '@angular/router';
import { AppLayout } from './app/layout/component/app.layout';
import { Notfound } from './app/pages/notfound/notfound';

export const appRoutes: Routes = [
    {
        path: '',
        component: AppLayout,
        children: [
            { path: '', loadChildren: () => import('./app/pages/pages.routes') }
        ]
    },
    { path: 'notfound', component: Notfound },
    { path: '**', redirectTo: 'notfound' }
];
