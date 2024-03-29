import { Component, OnInit } from '@angular/core';
import { SpoonacularService } from '../spoonacular.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-recipe-list',
  standalone: true,
  imports: [CommonModule,FormsModule,RouterLink],
  templateUrl: './recipe-list.component.html',
  styleUrl: './recipe-list.component.scss'
})
export class RecipeListComponent  implements OnInit{

  
  recipes:any[]=[];


  constructor(public spoonacularService:SpoonacularService){}


  ngOnInit(): void {
    this.spoonacularService.recipes$.subscribe(recipes=>{
      this.recipes=recipes;
      
    });
  }

}
