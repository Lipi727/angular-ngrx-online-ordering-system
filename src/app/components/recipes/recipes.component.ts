import { Component, OnInit } from '@angular/core';
import { Recipe } from '../../models/recipe.model'
import { RecipeService } from 'src/app/services/recipe.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.scss']
})
export class RecipesComponent implements OnInit {
 
  constructor(private recipeService: RecipeService) { }
  selectedRecipe!: Recipe;
  ngOnInit() {
    this.recipeService.selectedRecipe.subscribe(
      (recipe: Recipe) => {
           this.selectedRecipe=recipe;
      }
    );

  }

}
