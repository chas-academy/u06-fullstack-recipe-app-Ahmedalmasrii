import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component'; // Lägg till detta om det saknas
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

@NgModule({
  declarations: [
    HomeComponent // Se till att HomeComponent är deklarerad här
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MatSlideToggleModule // Lägg till denna rad
  ]
})
export class HomeModule { }
