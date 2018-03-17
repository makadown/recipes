
import {Ingredient} from '../models/ingredient.model';
import { Subject } from 'rxjs/Subject';

export class ShoppingListService {

  ingredientsChanged = new Subject<Ingredient[]>();
  startedEditing = new Subject<number>();

  private ingredients : Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 5),
  ];

   getIngredients()   {     return this.ingredients.slice();   }

   getIngredient(index:number)   {
        return this.ingredients[index];
   }

   addIngredient(ingredient: Ingredient)   {
     this.ingredients.push(ingredient);
     this.ingredientsChanged.next(this.ingredients.slice());
   }

  addIngredients(ingredients:Ingredient[]){
    this.ingredients.push(...ingredients); //esto agrega cada elemento del array,
    //si lo pusiera sin los tres puntos, mete el array completo a la lista de ingredientes.
    this.ingredientsChanged.next(this.ingredients.slice());
  }

  updateIngredient(index:number , newIngredient:Ingredient){
        this.ingredients[index] = newIngredient;
        this.ingredientsChanged.next(this.ingredients.slice());
  }

  deleteIngredient(index:number){
        this.ingredients.splice(index, 1);
        this.ingredientsChanged.next(this.ingredients.slice());
  }

}
