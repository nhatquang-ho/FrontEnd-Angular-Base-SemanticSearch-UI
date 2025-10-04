import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent implements OnInit {
  users: any[] = [];
  constructor(private api: ApiService) {}
  ngOnInit() {
    this.load();
  }
  load() {
    this.api.getAllUsers().subscribe((r: any) => (this.users = r || []));
  }
  activate(u: any) {
    this.api.activateUser(u.id).subscribe(() => this.load());
  }
  deactivate(u: any) {
    this.api.deactivateUser(u.id).subscribe(() => this.load());
  }
}
