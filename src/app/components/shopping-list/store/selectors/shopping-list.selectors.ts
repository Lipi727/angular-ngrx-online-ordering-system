import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromShoppingList from '../reducers/shopping-list.reducer';

export const selectShoppingListState = createFeatureSelector<fromShoppingList.ShoppingState>(
  fromShoppingList.shoppingListFeatureKey
);


export const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal
} = fromShoppingList.shoppingAdopter.getSelectors(selectShoppingListState);


export const getIngredients = selectAll;