import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  username = '';
  password = '';
  error = '';
  constructor(
    private auth: AuthService,
    private router: Router,
  ) {}
  submit() {
    this.auth.login({ username: this.username, password: this.password }).subscribe({
      next: (res: any) => {
        this.auth.setTokens(res);
        this.router.navigateByUrl('/');
      },
      error: (e) => (this.error = e?.error?.message || 'Login failed'),
    });
  }
}
