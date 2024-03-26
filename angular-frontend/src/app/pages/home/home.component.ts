import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MatSlideToggleModule], // Säkerställ att du importerar MatSlideToggleModule om du använder standalone components
  templateUrl: './home.component.html', // Uppdaterad för att peka på korrekt mallfil
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  title = 'angular-frontend';
}
