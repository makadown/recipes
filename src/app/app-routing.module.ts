import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';

import { ShoppingListComponent } from './components/shopping-list/shopping-list.component';
import { SignupComponent } from './auth/signup/signup.component';
import { SigninComponent } from './auth/signin/signin.component';
import { HomeComponent } from './core/home/home.component';

const app_routes: Routes = [
  { path : '', component: HomeComponent },
  { path : 'recipes', loadChildren:'./components/recipes/recipes.module#RecipesModule' }, /*Lazy Loading*/
  { path: 'shopping-list', component: ShoppingListComponent }
];

/* Con preloadingStrategy : PreloadAllModules  precargo los modulos que se cargarán lazy */
@NgModule({
  imports: [RouterModule.forRoot(app_routes, { preloadingStrategy : PreloadAllModules })],
  exports: [RouterModule]
})
export class AppRoutingModule{


}
