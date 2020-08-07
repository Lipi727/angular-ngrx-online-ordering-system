import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, concatMap, switchMap } from 'rxjs/operators';
import { EMPTY, of } from 'rxjs';

import * as RecipeActions from '../actions/recipe.actions';
import { RecipeService } from 'src/app/services/recipe.service';
import { loadShoppingListsFailure } from 'src/app/components/shopping-list/store/actions/shopping-list.actions';



@Injectable()
export class RecipeEffects {
  loadRecipes$ = createEffect(() =>
  this.actions$.pipe(
    ofType(RecipeActions.loadRecipes),
    switchMap(action =>
     this.recipeService.getRecipe().pipe(
       map((data:any)=> RecipeActions.loadRecipesSuccess({recipes:data})),
       catchError((error) => of(RecipeActions.loadRecipesFailure({error}))
       )
     )
    )
  )
  );



  constructor(private actions$: Actions, private recipeService: RecipeService) {}

}
