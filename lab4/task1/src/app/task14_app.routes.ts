import {Routes} from '@angular/router';

import {Home} from './home/home';
import {User} from './user';

export const routes: Routes = [
  {
    path: '',
    title: 'AppComponent Home Page',
    component: Home,
  },
  {
    path: 'user',
    title: 'AppComponent User Page',
    component: User,
  },
];
