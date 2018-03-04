import { Component, OnInit } from '@angular/core';
import {Recipe} from '../recipe.model';
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A test recipe',
               'This is a test',
              'https://cdn.pixabay.com/photo/2016/06/15/19/09/food-1459693_960_720.jpg'),
    new Recipe('una recetita',
               'Otro test',
      'https://www.gallinablanca.es/files/thumbs/807e922ac87a1e4bb8f5a835bdf86a0f7c3af799_r900_340_5.jpg')
  ];
  constructor() { }

  ngOnInit() {
  }

}
