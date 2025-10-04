import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API_BASE } from './environment';
@Injectable()
export class AuthService {
  private tokenKey = 'auth_token';
  private refreshKey = 'refresh_token';
  private userKey = 'auth_user';
  constructor(private http: HttpClient) {}
  login(payload: { username: string; password: string }) {
    return this.http.post<any>(`${API_BASE}/auth/login`, payload);
  }
  register(payload: any) {
    return this.http.post<any>(`${API_BASE}/auth/register`, payload);
  }
  setTokens(resp: any) {
    if (resp?.accessToken) localStorage.setItem(this.tokenKey, resp.accessToken);
    if (resp?.refreshToken) localStorage.setItem(this.refreshKey, resp.refreshToken);
    if (resp?.user) localStorage.setItem(this.userKey, JSON.stringify(resp.user));
  }
  getToken() {
    return localStorage.getItem(this.tokenKey);
  }
  getUser() {
    const s = localStorage.getItem(this.userKey);
    return s ? JSON.parse(s) : null;
  }
  isAuthenticated() {
    return !!this.getToken();
  }
  isAdmin() {
    const u = this.getUser();
    return !!(u && u.roles && Array.isArray(u.roles) && u.roles.includes('ADMIN'));
  }
  logout() {
    localStorage.removeItem(this.tokenKey);
    localStorage.removeItem(this.refreshKey);
    localStorage.removeItem(this.userKey);
  }
}
