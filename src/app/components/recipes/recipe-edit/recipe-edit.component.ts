import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.scss']
})
export class RecipeEditComponent implements OnInit {

  constructor(private _fb : FormBuilder) { }
  editRecipeForm!: FormGroup;

  ngOnInit(): void {
    this.editRecipeForm = this._fb.group({
      resName: ['', Validators.required],
      imgUrl: ['', Validators.required],
      discription:['', Validators.required]
    })
  }

  editRecipe(){
    console.log(this.editRecipeForm.value)
  }
}
