import { Injectable } from '@angular/core';
import { RecipeService } from '../services/recipe.service';
import { Recipe } from '../models/recipe.model';
import 'rxjs/add/operator/map'
import { AuthService } from './auth.service';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class DataStorageService {

  constructor(private httpClient : HttpClient ,
              private recipeService: RecipeService,
              private authService: AuthService
              ) {

  }

  storeRecipes(){
    const token =  this.authService.getToken();

    return  this.httpClient.put('https://ng-recipe-book-9ff2a.firebaseio.com/recipes.json?auth='+token,
                    this.recipeService.getRecipes());
  }

  getRecipes(){

    const token =  this.authService.getToken();

     //console.log('Fetching data with: '+token);
    this.httpClient.get<Recipe[]>('https://ng-recipe-book-9ff2a.firebaseio.com/recipes.json?auth='+token)
    .map(
        (recipes)=>{
          //const recipes:Recipe[] = response.json();
          for(let recipe of recipes) {
                if (!recipe['ingredients']){
                  recipe['ingredients']=[];
                }
          }
          return recipes;
        }
    )
    .subscribe(
            (recipes:Recipe[])=>{
                this.recipeService.setRecipes(recipes);
            }
    );
  }

}
