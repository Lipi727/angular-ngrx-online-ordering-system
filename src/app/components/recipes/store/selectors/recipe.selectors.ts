import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromRecipe from '../reducers/recipe.reducer';
import { Recipe } from 'src/app/models/recipe.model';

export const selectRecipeState = createFeatureSelector<fromRecipe.RecipeState>(
  fromRecipe.recipeFeatureKey
);

export const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal
} = fromRecipe.recipeAdapter.getSelectors(selectRecipeState);

export const getRecipes = selectAll;
export const getSelectEntities = selectEntities;
export const getSelectedRecipe = (id:string) =>
      createSelector(getRecipes, all=> all ? all.filter((rec: Recipe)=> rec.id === id) : null);
      

       


