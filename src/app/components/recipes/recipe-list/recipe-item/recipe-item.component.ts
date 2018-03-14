import { Component, OnInit, Input, Output } from '@angular/core';
import { Recipe } from  '../../../../models/recipe.model';
import {RecipeService} from '../../../../services/recipe.service';

@Component({
  selector   : 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls  : ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  @Input() receta: Recipe;

  constructor(private recipeService : RecipeService) { }

  ngOnInit() {
  }

  onSelected()  {
      this.recipeService.recipeSelected.emit(this.receta);
  }

}
