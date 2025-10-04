import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  products: any[] = [];
  query = '';
  loading = false;
  constructor(
    private api: ApiService,
    private router: Router,
  ) {}
  ngOnInit() {
    this.load();
  }
  load() {
    this.loading = true;
    this.api.getAllProducts().subscribe({
      next: (r) => {
        this.products = r || [];
        this.loading = false;
      },
      error: () => (this.loading = false),
    });
  }
  view(id: number) {
    this.router.navigateByUrl('/products/' + id);
  }
  search() {
    if (!this.query) return this.load();
    this.api.searchProductsByName(this.query).subscribe((r) => (this.products = r || []));
  }
  semantic() {
    if (!this.query) return;
    this.api.semanticSearch(this.query).subscribe((r) => (this.products = r || []));
  }
}
