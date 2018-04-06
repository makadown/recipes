import { Injectable } from '@angular/core';
import { RecipeService } from '../services/recipe.service';
import { Recipe } from '../models/recipe.model';
import 'rxjs/add/operator/map'
import { AuthService } from './auth.service';
import { HttpClient,HttpParams,HttpRequest } from '@angular/common/http';

@Injectable()
export class DataStorageService {

  constructor(private httpClient : HttpClient ,
              private recipeService: RecipeService,
              private authService: AuthService
              ) {

  }

  storeRecipes(){ 

    //return  this.httpClient.put('https://ng-recipe-book-9ff2a.firebaseio.com/recipes.json?auth='+token,

    /*return  this.httpClient.put('https://ng-recipe-book-9ff2a.firebaseio.com/recipes.json',
            this.recipeService.getRecipes(),{
                observe:  'body',
                params: parametros
            });*/

        const req = new HttpRequest('PUT', 'https://ng-recipe-book-9ff2a.firebaseio.com/recipes.json',
                this.recipeService.getRecipes(),{
                    reportProgress:true
                })
         return this.httpClient.request(req);
  }

  getRecipes(){

     //console.log('Fetching data with: '+token);
    //this.httpClient.get<Recipe[]>('https://ng-recipe-book-9ff2a.firebaseio.com/recipes.json?auth='+token)
    this.httpClient.get<Recipe[]>('https://ng-recipe-book-9ff2a.firebaseio.com/recipes.json' , {
        observe : 'body',
        responseType : 'json'
    })
    .map(
        (recipes)=>{
          //console.log(recipes);
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
