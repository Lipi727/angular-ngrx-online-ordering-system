import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  
  constructor(private http: HttpClient) { }

  getRecipe(){
    return this.http.get('../../assets/_data/recipes.json');
  }
}
