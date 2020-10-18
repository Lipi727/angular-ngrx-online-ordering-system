import { Action, createReducer, on } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';

import * as fromRoot from 'src/app/store/reducers'
import * as ShoppingListActions from '../actions/shopping-list.actions';
import { Ingredient } from 'src/app/models/ingredient.model';
import { state } from '@angular/animations';


export const shoppingListFeatureKey = 'shoppingList';

export interface State extends fromRoot.State {

}

export interface ShoppingState extends EntityState<Ingredient> {
  error: any;
}

export const shoppingAdopter: EntityAdapter<Ingredient> = createEntityAdapter<Ingredient>();

export const ShoppingInitialState: ShoppingState = shoppingAdopter.getInitialState({
  error: null,
});


export const shoppingReducer = createReducer(
  ShoppingInitialState,

  on(ShoppingListActions.loadIngredient, state => state),
  on(ShoppingListActions.loadIngredientSuccess, (state, action) =>
    shoppingAdopter.addAll(action.ingredients, state)),
  on(ShoppingListActions.loadIngredientFailure, state => state),

  on(ShoppingListActions.addIngredient, (state, { insertIngredient }) => 
  shoppingAdopter.addOne(insertIngredient, state)),

);

