import { Component, OnInit, Input } from '@angular/core';
import { RecipeService } from 'src/app/services/recipe.service';
import { Recipe } from 'src/app/models/recipe.model';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.scss']
})
export class RecipeDetailComponent implements OnInit {
  @Input() recipe !: Recipe;
  constructor() { }
  
  ngOnInit(): void {
     

}
}