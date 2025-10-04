import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.css'],
})
export class UserDashboardComponent implements OnInit {
  profile: any = null;
  constructor(private api: ApiService) {}
  ngOnInit() {
    this.api.getProfile().subscribe((r) => (this.profile = r));
  }
}
