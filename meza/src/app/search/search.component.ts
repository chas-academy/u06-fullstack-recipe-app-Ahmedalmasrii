import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';

import { RecipeService } from '../services/recipe.service';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [FormsModule, MatSlideToggleModule],
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss'
})
export class SearchComponent implements OnInit {
  @Input() dishType = "";
  @Output() recipesEmitter: EventEmitter<any[]> = new EventEmitter<any[]>();
  querySearch = '';
  pork = false;
  soy = false;
  gluten = false;
  recipes: any
  constructor(private recipeService: RecipeService) { }
  onSearch() {
    const porkQuery = this.pork ? 'pork-free' : ""
    const soyQuery = this.soy ? 'soy-free' : ""
    const glutenQuery = this.gluten ? "gluten-free" : ""
    this.recipeService.getRecipes(this.querySearch, this.dishType, porkQuery,soyQuery, glutenQuery).subscribe((res) => {
      let recipeArray: any[];
      recipeArray = res.hits;
      let recipes = recipeArray.map(item => {
        return {
          self: item._links.self.href,
          label: item.recipe.label,
          image: item.recipe.image,
          totalTime: item.recipe.totalTime,
          ingredientLines: item.recipe.ingredientLines
        }
      });
      this.recipes = recipes;
      this.recipesEmitter.emit(this.recipes)
    });
  }
  getRecommendations() {
    this.recipeService.getRecipes('', this.dishType).subscribe((res) => {
      let recipeArray: any[];
      recipeArray = res.hits;
      let recipes = recipeArray.map(item => {
        return {
          self: item._links.self.href,
          label: item.recipe.label,
          image: item.recipe.image,
          totalTime: item.recipe.totalTime,
          ingredientLines: item.recipe.ingredientLines
        }
      });
      this.recipes = recipes;
      this.recipesEmitter.emit(this.recipes)
    });
  }
  ngOnInit(): void {
    this.getRecommendations();
  }
}