import { Injectable  } from '@angular/core';
import {Recipe} from '../models/recipe.model';
import {Subject} from 'rxjs/Subject';
import {Ingredient} from '../models/ingredient.model';
import {ShoppingListService} from '../services/shopping-list.service';

@Injectable()
export class RecipeService {
  recipesChanged = new Subject<Recipe[]>();

  private recipes: Recipe[] = [
    new Recipe('A test recipe', 'This is a test',
              'https://cdn.pixabay.com/photo/2016/06/15/19/09/food-1459693_960_720.jpg',
            [
              new Ingredient('Meat', 1),
              new Ingredient('French fries', 20)
            ] ),
    new Recipe('una recetita', 'Otro test',
      'https://www.gallinablanca.es/files/thumbs/807e922ac87a1e4bb8f5a835bdf86a0f7c3af799_r900_340_5.jpg',
      [
        new Ingredient('Buns', 2),
        new Ingredient('Meat', 1)
      ])
  ];

  constructor(private shoppingListService:  ShoppingListService) { }

  public getRecipes(){
     return this.recipes.slice(); //Arroja una copia del array
  }

  public getRecipe(index: number)
  {
     return this.recipes.slice()[index];
  }

  addIngredientsToShoppingList(ingredients:Ingredient[]){
        this.shoppingListService.addIngredients(ingredients);
  }

  addRecipe(recipe : Recipe){
      this.recipes.push(recipe);
      this.recipesChanged.next(this.recipes.slice());
  }

  updateRecipe(index: number, newRecipe : Recipe){
      this.recipes[index] = newRecipe;
      this.recipesChanged.next(this.recipes.slice());
  }

}
