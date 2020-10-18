import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ShoppingState } from '../store/reducers/shopping-list.reducer';
import { addIngredient } from '../store/actions/shopping-list.actions';
import { Ingredient } from 'src/app/models/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.scss']
})
export class ShoppingEditComponent implements OnInit {

  addIngredientForm!: FormGroup;
 id='3';

  ngOnInit(): void {
    this.addIngredientForm = this._fb.group({
      name: ['', Validators.required],
      amount: ['', Validators.required]
    });
  }

  addIngredient() {
    let insertIngredient:Ingredient = {
      id: this.id,
      name: this.addIngredientForm.get('name')?.value,
      amount: this.addIngredientForm.get('amount')?.value
     
    }
    console.log(insertIngredient);
   this.shoppingStore.dispatch(addIngredient({insertIngredient}));
  }
  constructor(private _fb: FormBuilder, private shoppingStore: Store<ShoppingState>) { }
}
