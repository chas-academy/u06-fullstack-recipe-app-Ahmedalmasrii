import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../services/recipe.service';
import { Router, RouterLink, RouterModule } from '@angular/router';
import { FormsModule, NgModel } from '@angular/forms';


@Component({
  selector: 'app-recipe-search',
  standalone: true,
  imports:[FormsModule,RouterLink],
  templateUrl: './recipe-search.component.html',
  styleUrl: './recipe-search.component.scss'
})
export class RecipeSearchComponent implements OnInit {
  query:string='';

  constructor(private recipeservice:RecipeService,private router:Router){}

  // searchRecipes() {
  //   this.recipeservice.searchRecipes(this.query);
  //   this.router.navigate(['recipes']); 
  // }
  ngOnInit(): void {
   
  }

}
