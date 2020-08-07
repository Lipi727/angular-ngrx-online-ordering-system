import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';
import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { RecipeItemComponent } from './recipe-list/recipe-item/recipe-item.component';
import { RecipeRoutingModule } from './recipe-routing.module';

import {MatMenuModule} from '@angular/material/menu';
import {MatCardModule} from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { StoreModule } from '@ngrx/store';
import { recipeFeatureKey } from './store/reducers/recipe.reducer';
import { recipeReducer } from './store/reducers/recipe.reducer'
import { EffectsModule } from '@ngrx/effects';
import { RecipeEffects } from './store/effects/recipe.effects';
import { RecipeEditComponent } from './recipe-edit/recipe-edit.component';
import { RecipeStartComponent } from './recipe-start/recipe-start.component';
 

@NgModule({
  declarations: [
    RecipeDetailComponent,
    RecipeListComponent,
    RecipeItemComponent,
    RecipeEditComponent,
    RecipeStartComponent,
  ],
  imports: [
    CommonModule,
    MatMenuModule,
    MatCardModule,
    MatButtonModule,
    StoreModule.forFeature(recipeFeatureKey, recipeReducer),
    EffectsModule.forFeature([RecipeEffects]),
    RecipeRoutingModule
  ],
  exports: [
    RecipeDetailComponent,
    RecipeListComponent,
    MatCardModule
  ]
})
export class RecipesModule { }
