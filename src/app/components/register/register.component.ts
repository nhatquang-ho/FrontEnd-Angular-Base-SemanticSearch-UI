import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  username = '';
  email = '';
  password = '';
  firstName = '';
  lastName = '';
  error = '';
  constructor(
    private auth: AuthService,
    private router: Router,
  ) {}
  submit() {
    this.auth
      .register({
        username: this.username,
        email: this.email,
        password: this.password,
        firstName: this.firstName,
        lastName: this.lastName,
      })
      .subscribe({
        next: () => this.router.navigateByUrl('/login'),
        error: (e) => (this.error = e?.error?.message || 'Error'),
      });
  }
}
