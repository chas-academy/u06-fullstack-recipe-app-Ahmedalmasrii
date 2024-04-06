import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { HttpClientModule } from '@angular/common/http';
import { Router, RouterLink } from '@angular/router'; 
import { Register } from '../models/Sign-up.model';

@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [FormsModule, HttpClientModule , RouterLink],
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent {
  registerdetails: Register;
  errorMessage: string = ''; // Ny egenskap för felmeddelanden


  constructor(private auth: AuthService, private router: Router) { 
    this.registerdetails = new Register();
  }

  register() {
    this.auth.registerUser(this.registerdetails).subscribe({
      next: (response) => {
        console.log('User registered successfully', response);
        alert('Your account has been created successfully. Please login.'); // Visa ett alert-meddelande

        
        this.router.navigate(['/login']);
      },
      error: (error) => {
        console.error('Registration error', error);
        this.errorMessage='Registration failed. Please try again.'
      }
    });
  }
}
