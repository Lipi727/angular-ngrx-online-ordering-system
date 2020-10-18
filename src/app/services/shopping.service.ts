import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Ingredient } from '../models/ingredient.model';

@Injectable({
  providedIn: 'root'
})
export class ShoppingService {

  constructor(private http: HttpClient) { }

  getIngredient(){
    //get data from API(here using default json file)
  return this.http.get('../../assets/_data/ingredient.json');
  }

  addNewIngredient(newIngredient:Ingredient){
    return this.http.post('../../assets/_data/ingredient.json', newIngredient)
  }
}
