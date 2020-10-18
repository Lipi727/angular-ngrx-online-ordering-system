import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { SharedModule } from 'src/app/shared/shared.module';

import { shoppingListFeatureKey, shoppingReducer } from './store/reducers/shopping-list.reducer';
import { ShoppingListEffects } from './store/effects/shopping-list.effects';



@NgModule({
  declarations: [
  ],
  imports: [
    SharedModule,
    StoreModule.forFeature(shoppingListFeatureKey, shoppingReducer),
    EffectsModule.forFeature([ShoppingListEffects]),
  ]
})
export class ShoppingListModule { }
