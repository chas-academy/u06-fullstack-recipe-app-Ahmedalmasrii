import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { LayoutComponent } from './pages/layout/layout.component';
import { HomeComponent } from './pages/home/home.component';
import { OmOssComponent } from './pages/om-oss/om-oss.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { FooterComponent } from './pages/footer/footer.component';
import { RecipeSearchComponent } from './recipe-search/recipe-search.component';
import { RecipeListComponent } from './recipe-list/recipe-list.component';


export const routes: Routes = [
    {
        path: '', redirectTo: 'login', pathMatch: 'full'
    },

    { path: 'login', component: LoginComponent },

    { path: 'signup', component: SignUpComponent },

    { path: 'home', component: HomeComponent },

    { path: 'omoss', component: OmOssComponent },

    { path: 'layout', component: LayoutComponent },
    
    { path: 'footer', component: FooterComponent },
    {path: 'search', component: RecipeSearchComponent},
    {path: 'recipes' ,component:RecipeListComponent},

    { path: '', redirectTo: '/search', pathMatch: 'full' }, // Omdirigering från rotvägen till söksidan

];
