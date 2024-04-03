import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../services/recipe.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-recipe-list',
  standalone: true,
  imports: [CommonModule,FormsModule,RouterLink],
  templateUrl: './recipe-list.component.html',
  styleUrl: './recipe-list.component.scss'
})
export class RecipeListComponent  implements OnInit{
  id: string  = '';
  recipe: any;

  constructor(private route: ActivatedRoute, private recipeService: RecipeService){}

  ngOnInit(){
    this.route.params.subscribe((params) => {
      this.id = params['id'];
    });

    this.getRecipe()
  }

  getRecipe(){
    this.recipeService.getRecipeById(this.id).subscribe(result=> {
      console.log(result)
      this.recipe = result.recipe
    })
  }

}
