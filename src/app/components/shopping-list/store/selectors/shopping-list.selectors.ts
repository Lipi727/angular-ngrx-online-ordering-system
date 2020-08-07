import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromShoppingList from '../reducers/shopping-list.reducer';

export const selectShoppingListState = createFeatureSelector<fromShoppingList.State>(
  fromShoppingList.shoppingListFeatureKey
);
