import { Routes } from '@angular/router';

export const routes: Routes = [{
    path: '',
    loadChildren: () => import('./hi/hi.module').then(m => m.HiModule)
}];
