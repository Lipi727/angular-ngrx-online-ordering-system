import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { RecipeState } from '../store/reducers/recipe.reducer';
import { getSelectedRecipe } from '../store/selectors/recipe.selectors';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.scss']
})
export class RecipeEditComponent implements OnInit {

  constructor(private _fb: FormBuilder, private route: ActivatedRoute, private recStrore: Store<RecipeState>) { }
  private alive = new Subject<void>();
  editRecipeForm!: FormGroup;
  editMode = false;
  id!:any;
  recipe$!:any;
  ngOnInit(): void {
    this.editRecipeForm = this._fb.group({
      resName: ['', Validators.required],
      imgUrl: ['', Validators.required],
      discription: ['', Validators.required]
    })

    this.route.params.subscribe((params:Params)=>{
      this.id =+params['id'];
      this.editMode=+params['id'] !=null
    }
    )   
    this.initForm();
  }

  private initForm(){
    let recipeName='';
    let imgUrl= '';
    let discription = '';

    if(this.editMode){
      this.recStrore.pipe(takeUntil(this.alive), select(getSelectedRecipe(this.id))).subscribe(
        rec => this.recipe$=rec
       );
       recipeName = this.recipe$.name;
       imgUrl = this.recipe$.imagePath;
       discription=this.recipe$.description;
      }
        
      this.editRecipeForm = new FormGroup({
        'resName': new FormControl(recipeName),
        // 'imgUrl': new FormControl(imgUrl),
        'discription': new FormControl(discription)
      })
    }
}
