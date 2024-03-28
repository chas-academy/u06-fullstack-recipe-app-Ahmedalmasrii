import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recipe-list',
  standalone: true,
  imports: [],
  templateUrl: './recipe-list.component.html',
  styleUrl: './recipe-list.component.scss'
})
export class RecipeListComponent  implements OnInit{
  
  constructor(){}

  recipes:any[]=[];
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

}
