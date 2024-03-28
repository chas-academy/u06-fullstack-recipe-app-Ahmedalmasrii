import { Component, OnInit } from '@angular/core';
import { SpoonacularService } from '../spoonacular.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recipe-search',
  standalone: true,
  imports: [],
  templateUrl: './recipe-search.component.html',
  styleUrl: './recipe-search.component.scss'
})
export class RecipeSearchComponent implements OnInit {
  query:string='';

  constructor(private spoonacularService:SpoonacularService,private router:Router){}

  searchReceipes() {
    this.spoonacularService.searchRecipes(this.query);
  }
  ngOnInit(): void {
   
  }

}
