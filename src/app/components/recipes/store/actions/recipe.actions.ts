import { createAction, props } from '@ngrx/store';
import { Recipe } from 'src/app/models/recipe.model';

export const loadRecipes = createAction(
  '[Recipe] Load Recipes'
);

export const loadRecipesSuccess = createAction(
  '[Recipe] Load Recipes Success',
  props<{ recipes: Recipe[] }>()
);

export const loadRecipesFailure = createAction(
  '[Recipe] Load Recipes Failure',
  props<{ error: any }>()
);
