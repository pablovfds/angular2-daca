import { Routes, RouterModule } from '@angular/router';

import { ProblemsComponent } from './problems/problems.component';
import { HomeComponent } from './home/home.component';

const appRoutes: Routes = [
    { path : '', component : HomeComponent},
    {path : 'problems', component : ProblemsComponent}
];

export const routing = RouterModule.forRoot(appRoutes);