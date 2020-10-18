import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { ShoppingState } from '../shopping-list/store/reducers/shopping-list.reducer';
import { loadIngredient } from './store/actions/shopping-list.actions';
import { Ingredient } from 'src/app/models/ingredient.model';
import { getIngredients } from './store/selectors/shopping-list.selectors';


@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss']
})
export class ShoppingListComponent implements OnInit {
  
  private alive = new Subject<void>();
  ingredients$!: Observable<Ingredient[]>;
  constructor(private shoppingStore: Store<ShoppingState>) { }

  ngOnInit(): void {
   this.shoppingStore.dispatch(loadIngredient());
   this.ingredients$ = this.shoppingStore.pipe(takeUntil(this.alive), select(getIngredients));
  }

}
