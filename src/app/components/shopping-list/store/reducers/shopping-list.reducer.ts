import { Action, createReducer, on } from '@ngrx/store';
import * as ShoppingListActions from '../actions/shopping-list.actions';

export const shoppingListFeatureKey = 'shoppingList';

export interface State {

}

export const initialState: State = {

};


export const reducer = createReducer(
  initialState,

  on(ShoppingListActions.loadShoppingLists, state => state),
  on(ShoppingListActions.loadShoppingListsSuccess, (state, action) => state),
  on(ShoppingListActions.loadShoppingListsFailure, (state, action) => state),

);

