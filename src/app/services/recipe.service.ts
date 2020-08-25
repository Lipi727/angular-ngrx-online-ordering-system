import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Recipe } from '../models/recipe.model';


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
