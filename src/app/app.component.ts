import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(public auth: AuthService) {}
  logout() {
    this.auth.logout();
    window.location.href = '/';
  }
  // show a simple alert for mobile menu (keeps template clean)
  mobileMenuAlert() {
    window.alert('mobile menu — expand in next iteration');
  }
}
