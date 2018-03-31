import { Component, OnInit  } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import {Recipe} from '../../../models/recipe.model';
import {Ingredient} from '../../../models/ingredient.model';
import {RecipeService} from '../../../services/recipe.service';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  recipe: Recipe;
  id : number;

  constructor(private recipeService: RecipeService ,
              private authService: AuthService,
              private router: Router,
              private route : ActivatedRoute
               ) { }

  ngOnInit() {
        this.route.params.subscribe(
            (params:Params) => {
                this.id = +params['id'];
                this.recipe = this.recipeService.getRecipe(this.id);
          }
        );// con el signo + se hace el casteo de string a numerico
  }

  onAddToShoppingList(){
      this.recipeService.addIngredientsToShoppingList(this.recipe.ingredients);
  }

  onEditRecipe(){
      this.router.navigate(['edit'], { relativeTo: this.route });
  }

  onDeleteRecipe(){
      this.recipeService.deleteRecipe(this.id);
      this.router.navigate(['../'], { relativeTo: this.route } );
  }

}
