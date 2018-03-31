import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RecipesComponent } from './recipes.component';
import { RecipeStartComponent } from './recipe-start/recipe-start.component';
import { RecipeEditComponent } from './recipe-edit/recipe-edit.component';
import { AuthGuardService } from '../../services/auth-guard.service';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';

const recipesRoutes: Routes = [
  { path: 'recipes', component: RecipesComponent, children: [
          { path : '', component: RecipeStartComponent    },
          { path : 'new', component: RecipeEditComponent, canActivate:[AuthGuardService] }, //tiene que ir primero
          { path : ':id', component: RecipeDetailComponent }, //si se pone primero que new, tronará
          { path : ':id/edit', component: RecipeEditComponent, canActivate:[AuthGuardService] }
  ] }
]

@NgModule({
  imports: [ RouterModule.forChild(recipesRoutes) ],
  exports: [ RouterModule ],
  providers: []
})
export class RecipesRoutingModule { }
