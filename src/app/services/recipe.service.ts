import { Injectable, EventEmitter } from '@angular/core';

import { Recipe } from '../models/recipe.model';
// import { Recipes } from '../_data/recipes.json';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  selectedRecipe = new EventEmitter<Recipe>();
  
  constructor(private http: HttpClient) { }

  getRecipe(){
    return this.http.get('../../assets/_data/recipes.json');
  }
}
