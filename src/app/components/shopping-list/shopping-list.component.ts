import { Component, OnInit,OnDestroy } from '@angular/core';
import {Subscription} from 'rxjs/Subscription';

import {Ingredient} from '../../models/ingredient.model';
import {ShoppingListService} from '../../services/shopping-list.service';


@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  ingredients : Ingredient[];
  private suscription : Subscription;

  constructor(private shoppingListService : ShoppingListService) {  }

  ngOnInit() {
        this.ingredients = this.shoppingListService.getIngredients();
        this.suscription =
        this.shoppingListService.ingredientsChanged.subscribe(
            (ingredients: Ingredient[]) => {
                  this.ingredients = ingredients;
            }
        );
  }

  ngOnDestroy()
  {
    this.suscription.unsubscribe();
  }

  onEditItem(index:number){
            this.shoppingListService.startedEditing.next(index);
  }

}
