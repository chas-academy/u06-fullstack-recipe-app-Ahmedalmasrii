import { Component, Input, input } from '@angular/core';
import { RecipeService } from '../../services/recipe.service';
import { SearchComponent } from '../../search/search.component';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
@Component({
  selector: 'app-mains',
  standalone: true,
  imports: [SearchComponent,RouterLink,RouterLinkActive],
  templateUrl: './starters.component.html',
  styleUrl: './starters.component.scss',
})
export class StartersComponent {
  dishType = 'Starter';
  recipes?: any;
  constructor(private recipeService: RecipeService, private router: Router) {}
  recieveRecipes(recipes: any[]) {
    this.recipes = recipes;
  }
 
  goToDetails(recipe: any) {
    let startIndex = recipe.self.indexOf("/v2/") + 4;
    let endIndex = recipe.self.indexOf("?");
    let extractedId = recipe.self.substring(startIndex, endIndex);
    console.log(extractedId);
    this.router.navigate(['/recipe', extractedId]);
  }
}
