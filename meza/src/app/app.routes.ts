import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { LayoutComponent } from './pages/layout/layout.component';
import { HomeComponent } from './pages/home/home.component';
import { OmOssComponent } from './pages/om-oss/om-oss.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { FooterComponent } from './pages/footer/footer.component';

import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { authGuard } from './guards/auth.guard';
import { MainsComponent } from './pages/mains/mains.component';
import { StartersComponent } from './pages/starters/starters.component';
import { DessertsComponent } from './pages/desserts/desserts.component';


export const routes: Routes = [
    {
        path: '', redirectTo: 'login', pathMatch: 'full'
    },

    { path: 'login', component: LoginComponent },

    { path: 'signup', component: SignUpComponent },

    { path: 'home', component: HomeComponent },

    { path: 'omoss', component: OmOssComponent},

    { path: 'layout', component: LayoutComponent },
    
    { path: 'footer', component: FooterComponent },

    {path: 'recipe' ,component:RecipeListComponent},

    {path: 'mains' ,component: MainsComponent},
    {path: 'starter' ,component: StartersComponent , canActivate: [authGuard]},
    {path: 'dessert' ,component: DessertsComponent , canActivate: [authGuard]},


    { path: '', redirectTo: '/search', pathMatch: 'full' }, // Omdirigering från rotvägen till söksidan

];
