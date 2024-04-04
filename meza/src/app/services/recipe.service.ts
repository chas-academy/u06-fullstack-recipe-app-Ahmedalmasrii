import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class RecipeService {
  private baseUrl = 'https://api.edamam.com/api/recipes/v2';
  private app_key = 'adcef2398f44cd544d5e0bbb24d9c189';
  private app_id = 'ecd18863';
  private httpOptions = {
    headers: new HttpHeaders({
      accept: 'application/json',
      'Accept-Language': 'en',
    }),
  };
  constructor(private http: HttpClient) { }
  getRecipes(
    searchterm: string,
    dishType: string,
    vegan: string = '',
    dairy: string = '',
    gluten: string = ''
  ): Observable<any> {
    let url =
      this.baseUrl +
      '?type=public' +
      '&q=' +
      searchterm +
      '&app_id=' +
      this.app_id +
      '&app_key=' +
      this.app_key +
      '&dishType=' +
      dishType +
      '&random=true'
    if (vegan) {
      url += '&health=vegan';
    }
    if (dairy) {
      url += '&health=dairy-free';
    }
    if (gluten) {
      url += '&health=gluten-free';
    }
    console.log(url);
    return this.http.get<any>(url, this.httpOptions);
  }
  getRecipeById(id: string) {
    let url =
      this.baseUrl +
      '/' +
      id +
      '?type=public' +
      '&app_id=' +
      this.app_id +
      '&app_key=' +
      this.app_key;
    return this.http.get<any>(url, this.httpOptions);
  }
  getRecipeByUrl(url:string){
    return this.http.get<any>(url,this.httpOptions)
  }
}

