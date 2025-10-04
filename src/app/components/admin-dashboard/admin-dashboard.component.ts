import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css'],
})
export class AdminDashboardComponent implements OnInit {
  stats: any = { users: 0, products: 0 };
  constructor(private api: ApiService) {}
  ngOnInit() {
    this.load();
  }
  load() {
    this.api.getAllUsers().subscribe((u) => (this.stats.users = (u || []).length));
    this.api.getAllProducts().subscribe((p) => (this.stats.products = (p || []).length));
  }
}
