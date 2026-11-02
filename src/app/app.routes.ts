import { Routes } from '@angular/router';
import { HomePage } from './home-page/home-page';
import { LinearGenerator } from './linear-generator/linear-generator';

export const routes: Routes = [
    {
    path: '',
    component: HomePage,
  },
  {
    path: 'linear',
    component: LinearGenerator,
  },];
