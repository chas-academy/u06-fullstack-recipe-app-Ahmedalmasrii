import { Component, OnInit } from '@angular/core';
import { SpoonacularService } from '../spoonacular.service';
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

  constructor(private spoonacularService:SpoonacularService,private router:Router){}

  searchRecipes() {
    this.spoonacularService.searchRecipes(this.query);
    this.router.navigate(['recipes']); 
  }
  ngOnInit(): void {
   
  }

}
