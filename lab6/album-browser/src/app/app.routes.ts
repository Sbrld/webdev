import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { AlbumsComponent } from './pages/albums/albums.component';
import { AlbumDetailComponent } from './pages/album-detail/album-detail.component';
import { AlbumPhotosComponent } from './pages/album-photos/album-photos.component';
import { TodoList } from './components/todo-list/todo-list';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'todos' },

  { path: 'todos', component: TodoList },

  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },

  { path: 'albums', component: AlbumsComponent },
  { path: 'albums/:id', component: AlbumDetailComponent },
  { path: 'albums/:id/photos', component: AlbumPhotosComponent },

  { path: '**', redirectTo: 'todos' },
];
