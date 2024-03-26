import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

@NgModule({
  declarations: [
    AppComponent
    // ... andra komponentdeklarationer ...
  ],
  imports: [
    BrowserModule,
    MatSlideToggleModule // Lägg till detta här
    // ... andra modulimporter ...
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
