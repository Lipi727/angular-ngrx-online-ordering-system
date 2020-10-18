import { Action, createReducer, on } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter} from '@ngrx/entity'

import * as RecipeActions from '../actions/recipe.actions';
import * as fromRoot from 'src/app/store/reducers'
import { Recipe } from 'src/app/models/recipe.model';


export const recipeFeatureKey = 'recipe';

export interface State  extends fromRoot.State{

}

export interface RecipeState extends EntityState<Recipe>{
  error: any;
  
}

export const recipeAdapter: EntityAdapter<Recipe> = createEntityAdapter<Recipe>();

export const recipeInitialState: RecipeState = recipeAdapter.getInitialState(
{
  error: null,

}
);

export const recipeReducer = createReducer(
  recipeInitialState,

  on(RecipeActions.loadRecipes, state => state),
  on(RecipeActions.loadRecipesSuccess, (state, action) => 
  recipeAdapter.addAll(action.recipes, state)),
  on(RecipeActions.loadRecipesFailure, (state, action) => state),

);

