import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecipesComponent } from './components/recipes/recipes.component';
import { ShoppingListComponent } from './components/shopping-list/shopping-list.component';
import { RecipeStartComponent } from './components/recipes/recipe-start/recipe-start.component';
import { RecipeDetailComponent } from './components/recipes/recipe-detail/recipe-detail.component';
import { RecipeEditComponent } from './components/recipes/recipe-edit/recipe-edit.component';

const app_routes: Routes = [
  { path : '', redirectTo:'/recipes', pathMatch:'full' },
  { path: 'recipes', component: RecipesComponent, children: [
          { path : '', component: RecipeStartComponent    },
          { path : 'new', component: RecipeEditComponent }, //tiene que ir primero
          { path : ':id', component: RecipeDetailComponent }, //si se pone primero que new, tronará
          { path : ':id/edit', component: RecipeEditComponent }
  ] },
  { path: 'shopping-list', component: ShoppingListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(app_routes)],
  exports: [RouterModule],
  declarations: [],
  providers: []
})
export class AppRoutingModule{


}
