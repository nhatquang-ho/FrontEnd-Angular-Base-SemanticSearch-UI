import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  profile: any = null;
  constructor(private api: ApiService) {}
  ngOnInit() {
    this.api.getProfile().subscribe((r) => (this.profile = r));
  }
}
