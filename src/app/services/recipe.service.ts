import { Injectable, EventEmitter } from '@angular/core';

import { Recipe } from '../models/recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  selectedRecipe = new EventEmitter<Recipe>();
  private  recipes: Recipe[] =[
    new Recipe(
        'Stuffed Masala Mushrooms',
        'this is a simpily test','../assets/images/stuffed-masala-mushrooms.jpg'),

    new Recipe(
        'Garlic Mushrooms In Garlic Sauce',
        'this is a simpily test','../assets/images/garlic-mushrooms-in-garlic-sauce.jpg')
       
  ];
  constructor() { }

  getRecipe(){
    return this.recipes;
  }
}
