import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from 'src/app/models/recipe.model';
import { RecipeService} from '../../../../services/recipe.service';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.scss']
})
export class RecipeItemComponent implements OnInit {
  @Input()
  recipe!: Recipe; 

  constructor(private recipeService: RecipeService){} 
  ngOnInit(): void {
  }
 
  onSelectRecipe(){
    this.recipeService.selectedRecipe.emit(this.recipe);
  }
}
