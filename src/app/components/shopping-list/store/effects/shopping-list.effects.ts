import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, concatMap } from 'rxjs/operators';
import { EMPTY, of } from 'rxjs';

import * as ShoppingListActions from '../actions/shopping-list.actions';



@Injectable()
export class ShoppingListEffects {

  loadShoppingLists$ = createEffect(() => {
    return this.actions$.pipe( 

      ofType(ShoppingListActions.loadShoppingLists),
      concatMap(() =>
        /** An EMPTY observable only emits completion. Replace with your own observable API request */
        EMPTY.pipe(
          map(data => ShoppingListActions.loadShoppingListsSuccess({ data })),
          catchError(error => of(ShoppingListActions.loadShoppingListsFailure({ error }))))
      )
    );
  });



  constructor(private actions$: Actions) {}

}
