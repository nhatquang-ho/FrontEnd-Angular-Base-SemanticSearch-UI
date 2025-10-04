import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API_BASE } from './environment';
@Injectable()
export class ApiService {
  constructor(private http: HttpClient) {}
  getAllProducts() {
    return this.http.get<any[]>(`${API_BASE}/products`);
  }
  getProductById(id: number) {
    return this.http.get<any>(`${API_BASE}/products/${id}`);
  }
  searchProductsByName(name: string) {
    return this.http.get<any[]>(`${API_BASE}/products/search`, { params: { name } });
  }
  semanticSearch(q: string) {
    return this.http.post<any[]>(`${API_BASE}/products/semantic-search`, { query: q });
  }
  getAllUsers() {
    return this.http.get<any[]>(`${API_BASE}/users`);
  }
  getProfile() {
    return this.http.get(`${API_BASE}/users/profile`);
  }
  activateUser(id: number) {
    return this.http.patch(`${API_BASE}/users/${id}/activate`, {});
  }
  deactivateUser(id: number) {
    return this.http.patch(`${API_BASE}/users/${id}/deactivate`, {});
  }
}
