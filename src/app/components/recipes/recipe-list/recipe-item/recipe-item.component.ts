import { Component, OnInit, Input, Output } from '@angular/core';
import { Recipe } from  '../../../../models/recipe.model';

@Component({
  selector   : 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls  : ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  @Input() receta: Recipe;
  @Input() index : number ; // viene de la propiedad Index en html de recipe-list.component

  ngOnInit() {
  }

}
