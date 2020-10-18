import { NgModule } from '@angular/core';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';
import { RecipeItemComponent } from './recipe-list/recipe-item/recipe-item.component';
import { RecipeEditComponent } from './recipe-edit/recipe-edit.component';
import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { RecipeStartComponent } from './recipe-start/recipe-start.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { recipeFeatureKey, recipeReducer } from './store/reducers/recipe.reducer';
import { RecipeEffects } from './store/effects/recipe.effects';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';



@NgModule({
  declarations: [
    // RecipeListComponent,
    // RecipeItemComponent,
    // RecipeEditComponent,
    RecipeStartComponent,
    RecipeDetailComponent,
   
  ],
  imports: [
    SharedModule,
    StoreModule.forFeature(recipeFeatureKey, recipeReducer),
    EffectsModule.forFeature([RecipeEffects]),
  ]
})
export class RecipeModule { }
