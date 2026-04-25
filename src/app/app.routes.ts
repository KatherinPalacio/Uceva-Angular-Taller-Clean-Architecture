import { Routes } from '@angular/router';
import { UsersPage } from './presentation/pages/users/users.page';
import { ProductsPage } from './presentation/pages/products/products.page';


import { MoviesPage } from './presentation/pages/movies/movies.page';
import { CategoriesPage } from './presentation/pages/categories/categories.page';

/**
 * Definición de las rutas principales de la aplicación.
 */
export const routes: Routes = [

  { path: 'users', component: UsersPage },

  { path: 'products', component: ProductsPage },

  
  { path: 'movies', component: MoviesPage },

  { path: 'categories', component: CategoriesPage },

 
  { path: '', redirectTo: 'users', pathMatch: 'full' },

  { path: '**', redirectTo: 'users' },
];