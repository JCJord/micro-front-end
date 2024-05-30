import { Routes } from '@angular/router';
import { ShellComponent } from './shell/shell.component';

export const routes: Routes = [{
    path: '',
    component: ShellComponent
},
{
    path: 'mf',
    loadChildren: () => import('mf/HiModule').then(m=> m.HiModule)
}

];
