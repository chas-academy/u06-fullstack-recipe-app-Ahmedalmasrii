import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './app/pages/home/home.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { importProvidersFrom } from '@angular/core';

bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(
      RouterModule.forRoot([
        { path: '', component: HomeComponent, pathMatch: 'full' }
        // Lägg till ytterligare rutter här
      ])
    )
  ]
}).catch(err => console.error(err));
