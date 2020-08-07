import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from 'src/app/models/recipe.model';
import { Subject } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.scss']
})
export class RecipeItemComponent implements OnInit {
  @Input() recipe!: Recipe;
  @Input() index!: string;

  constructor(private router: Router) { }
  ngOnInit(): void {
  }
  onSelect(id: string) {
  // this.router.navigate("",[id]);
  }
}
