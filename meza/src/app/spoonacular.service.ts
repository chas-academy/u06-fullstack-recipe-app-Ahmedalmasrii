import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SpoonacularService {
private apiKey:string='12f80af60ee846f49e6393fefe9189f5';
private recipeSubject:BehaviorSubject<any[]>=new BehaviorSubject<any[]>([]);
recipes$:Observable<any[]>=this.recipeSubject.asObservable();


  constructor(private http:HttpClient) { }
  searchRecipes(query:string):void {
    const url='https://api.spoonacular.com/recipes/complexSearch?query={query}';
    const headers=new HttpHeaders().set('apikey',this.apiKey);
    
    this.http.get(url,{headers}).subscribe((data:any)=>{
      this.recipeSubject.next(data.results);
    })
 
  }
}
