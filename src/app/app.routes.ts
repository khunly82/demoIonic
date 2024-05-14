import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    loadComponent: () => import('./pages/home/home.page').then( m => m.HomePage)
  },
  {
    path: 'chrono',
    loadComponent: () => import('./pages/chrono/chrono.page').then( m => m.ChronoPage)
  },
  {
    path: 'todo-list',
    loadComponent: () => import('./pages/todo-list/todo-list.page').then( m => m.TodoListPage)
  },
];
