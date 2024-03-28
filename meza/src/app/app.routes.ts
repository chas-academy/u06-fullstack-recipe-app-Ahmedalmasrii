import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { LayoutComponent } from './pages/layout/layout.component';
import { HomeComponent } from './pages/home/home.component';
import { OmOssComponent } from './pages/om-oss/om-oss.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { FooterComponent } from './pages/footer/footer.component';


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
];
