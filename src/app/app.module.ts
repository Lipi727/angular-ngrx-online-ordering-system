import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { DropdownDirective } from './shared/dropdown.directive';
import { RecipeListComponent } from './components/recipes/recipe-list/recipe-list.component';
import { RecipeItemComponent } from './components/recipes/recipe-list/recipe-item/recipe-item.component';
import { ShoppingListComponent } from './components/shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './components/shopping-list/shopping-edit/shopping-edit.component';
import { RecipesComponent } from './components/recipes/recipes.component';
import { RecipeDetailComponent } from './components/recipes/recipe-detail/recipe-detail.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatMenuModule} from '@angular/material/menu';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    DropdownDirective,
    RecipeListComponent,
    RecipeItemComponent,
    ShoppingListComponent,
    ShoppingEditComponent,
    RecipesComponent,
    RecipeDetailComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    MatGridListModule,
    MatMenuModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
