import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RecipesComponent } from './recipes.component';
import { RecipeStartComponent } from './recipe-start/recipe-start.component';
import { RecipeEditComponent } from './recipe-edit/recipe-edit.component';
import { AuthGuardService } from '../../services/auth-guard.service';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';

const recipesRoutes: Routes = [
  // Antes de lazy loading cargaba directamente en path el recipes, despues ya no
//{ path: 'recipes', component: RecipesComponent, children: [
  { path: '', component: RecipesComponent, children: [
          { path : '', component: RecipeStartComponent    },
          { path : 'new', component: RecipeEditComponent, canActivate:[AuthGuardService] }, //tiene que ir primero
          { path : ':id', component: RecipeDetailComponent }, //si se pone primero que new, tronará
          { path : ':id/edit', component: RecipeEditComponent, canActivate:[AuthGuardService] }
  ] }
]

@NgModule({
  imports: [ RouterModule.forChild(recipesRoutes) ],
  exports: [ RouterModule ],
  providers: [ AuthGuardService ]  //Este servicio se usa unicamente en el routing y no el module de recipes, por eso se queda aquí
})
export class RecipesRoutingModule { }
