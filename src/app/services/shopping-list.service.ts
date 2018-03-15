
import {Ingredient} from '../models/ingredient.model';
import { Subject } from 'rxjs/Subject';

export class ShoppingListService {

  ingredientsChanged = new Subject<Ingredient[]>();

  private ingredients : Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 5),
  ];

   getIngredients()   {     return this.ingredients.slice();   }

   addIngredient(ingredient: Ingredient)   {
     this.ingredients.push(ingredient);
     this.ingredientsChanged.next(this.ingredients.slice());
   }

  addIngredients(ingredients:Ingredient[]){
    this.ingredients.push(...ingredients); //esto agrega cada elemento del array,
    //si lo pusiera sin los tres puntos, mete el array completo a la lista de ingredientes.
    this.ingredientsChanged.next(this.ingredients.slice());
  }

}
