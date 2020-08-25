import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from 'src/app/models/recipe.model';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { RecipeState } from '../store/reducers/recipe.reducer';
import { Store, select } from '@ngrx/store';
import { getSelectedRecipe } from '../store/selectors/recipe.selectors';
import { Observable, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.scss']
})
export class RecipeDetailComponent implements OnInit {
  private alive = new Subject<void>();
  recipe$ !: Observable<any>;
  id!:any;
  constructor(private route: ActivatedRoute, private recStore: Store<RecipeState>, private router: Router) { }
  
  ngOnInit(): void {
    this.route.params.subscribe((params: Params)=>{
      this.id =+params['id'];
      this.recipe$= this.recStore.pipe(takeUntil(this.alive), select(getSelectedRecipe(this.id)));
    });   

}
onEditRecipe(){
  this.router.navigate(['../', this.id, 'edit'], { relativeTo: this.route});
}
}