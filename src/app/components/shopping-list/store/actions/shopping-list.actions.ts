import { createAction, props } from '@ngrx/store';

export const loadShoppingLists = createAction(
  '[ShoppingList] Load ShoppingLists'
);

export const loadShoppingListsSuccess = createAction(
  '[ShoppingList] Load ShoppingLists Success',
  props<{ data: any }>()
);

export const loadShoppingListsFailure = createAction(
  '[ShoppingList] Load ShoppingLists Failure',
  props<{ error: any }>()
);
