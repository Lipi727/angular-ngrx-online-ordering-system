import { Component, OnInit } from '@angular/core';
import { Recipe } from 'src/app/models/recipe.model';
import { RecipeState} from '../store/reducers/recipe.reducer'
import { Subject, Observable, from } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { loadRecipes } from '../store/actions/recipe.actions';
import { takeUntil } from 'rxjs/operators';
import { getRecipes } from '../store/selectors/recipe.selectors'

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit {
  private alive = new Subject<void>();
  recipes$!: Observable<Recipe[]>;
  constructor(private recStore: Store<RecipeState>) { }

  ngOnInit(): void {
    this.recStore.dispatch(loadRecipes());
    this.recipes$ = this.recStore.pipe(takeUntil(this.alive),select(getRecipes));
  }

}
