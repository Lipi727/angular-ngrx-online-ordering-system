import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';

import * as ShoppingListActions from '../actions/shopping-list.actions';
import { ShoppingService} from '../../../../services/shopping.service';
import { Ingredient } from 'src/app/models/ingredient.model';


@Injectable()
export class ShoppingListEffects {

loadIngredients$ = createEffect(()=>{
  return this.actions$.pipe(
    ofType(ShoppingListActions.loadIngredient),
    switchMap(action => this.shopppingService.getIngredient().pipe(
      map((data: any) => ShoppingListActions.loadIngredientSuccess({ ingredients: data })),
      catchError((error)=> of(ShoppingListActions.loadIngredientFailure({error})))
    ))
  );
});

addIngredient$ = createEffect(()=>{
 return this.actions$.pipe(
    ofType(ShoppingListActions.addIngredient),
    switchMap(action => this.shopppingService.addNewIngredient(action.insertIngredient).pipe(
      map((res:any)=> ShoppingListActions.addIngredientSuccess({ingredients:res})),
      catchError((error)=>of(ShoppingListActions.addIngredientFailure({error})))
      ))
 );
});
  constructor(private actions$: Actions, private shopppingService: ShoppingService) {}
}
