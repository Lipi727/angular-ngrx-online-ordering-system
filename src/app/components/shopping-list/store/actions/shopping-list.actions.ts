import { createAction, props } from '@ngrx/store';
import { Ingredient } from 'src/app/models/ingredient.model';

export const loadIngredient = createAction(
  '[Ingredient] Load Ingredients'
);
export const loadIngredientSuccess = createAction(
  '[Ingredient] Load Ingredients Success',
  props<{ ingredients: Ingredient[] }>()
);
export const loadIngredientFailure = createAction(
  '[Ingredient] Load Ingredients Failure',
  props<{ error: any }>()
);

export const addIngredient = createAction(
  '[Ingredient] Add Ingredient', props<{ insertIngredient: Ingredient}>()
);
export const addIngredientSuccess = createAction(
  '[Ingredient] Add Ingredient Success', props<{ ingredients: Ingredient[] }>()
);
export const addIngredientFailure = createAction(
  '[Ingredient] Add Ingredient Failure', props<{ error: any }>()
);
