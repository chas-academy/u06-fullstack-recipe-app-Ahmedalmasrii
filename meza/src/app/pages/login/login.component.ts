import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, HttpClientModule,RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  loginObj: Login;
  constructor(private http: HttpClient, private router: Router) {
    this.loginObj = new Login();
  }
  onLogin() {
    this.http.post('http://127.0.0.1:8000/api/login', this.loginObj).subscribe((res: any) => {
      console.log(res.token)

      if (res.token) {
        localStorage.setItem('token', res.token);

        console.log(localStorage.getItem('token'));

        alert('Login Success');
        this.router.navigateByUrl('/home')

      } else {
        alert(res.message);
      }
    });
  }
}

export class Login {
  email: string;
  password: string;
  constructor() {
    this.email = '';
    this.password = '';
  }
}
