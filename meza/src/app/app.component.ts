import { Component } from '@angular/core';
import { Router, RouterLink, RouterModule, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './pages/login/login.component';
import { FooterComponent } from './pages/footer/footer.component';
import { NavbarComponent } from './pages/navbar/navbar.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { RecipeSearchComponent } from './recipe-search/recipe-search.component';
import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { routes } from './app.routes';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    RouterLink,
    NavbarComponent,
    CommonModule,
    LoginComponent,
    FooterComponent,
    SignUpComponent,
    RecipeSearchComponent,
    RecipeListComponent,
    RouterModule,
    FormsModule,
    HttpClientModule,
    
  

      
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'Meza';
}
