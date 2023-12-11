import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './helper';
import { Observable } from 'rxjs';
import { User } from '../clases/user';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}

  public generateToken(loginData: any) {
    return this.http.post(`${baseUrl}/login`, loginData);
  }

  public getCurrentUser() {
    return this.http.get(`${baseUrl}/misDatos`);
  }

  //iniciamos sesión y establecemos el token en el localStorage
  public loginUser(token: any) {
    localStorage.setItem('token', token);
    return true;
  }

  public isLoggedIn() {
    let tokenStr = localStorage.getItem('token');
    if (tokenStr == undefined || tokenStr == '' || tokenStr == null) {
      return false;
    } else {
      return true;
    }
  }

  //cerranis sesion y eliminamos el token del localStorage
  public logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    return true;
  }

  //obtenemos el token
  public getToken() {
    return localStorage.getItem('token');
  }

  public setUser(user: any) {
    localStorage.setItem('user', JSON.stringify(user));
  }

  public getUser() {
    let userStr = localStorage.getItem('user');
    if (userStr != null) {
      return JSON.parse(userStr);
    } else {
      this.logout();
      return null;
    }
  }

  public getUserRoles() {
    let roleNames: string[] = [];

    let user = this.getUser();

    if (user.roles && user.roles.length > 0) {
      user.roles.forEach((role: { name: string }) => {
        roleNames.push(role.name);
      });
    }
    return roleNames;
  }

  getAllUsers(): Observable<User[]> {
    return this.http.get<User[]>(`${baseUrl}/allUsers`);
  }
  public createUser(newUser: any) {
    this.http.post(`${baseUrl}/createUser`, newUser).subscribe((response) => {
      console.log(response);
    });
  }

  updateUserDetails(user: User): Observable<any> {
    const userId = user.id;
    const url = `${baseUrl}/users/${userId}`;
    console.log('User antes de enviar:', user); // Registra el objeto user en la consola
    return this.http.put(url, user);
  }

  public isAdmin() {
    let roles = this.getUserRoles();
    return roles.includes('ADMIN');
  }

  deleteUser(userId: number): Observable<any> {
    const url = `${baseUrl}/users/${userId}`;
    return this.http.delete(url);
  }

  public getUserById(userId: number) {
    return this.http.get<User>(`${baseUrl}/users/${userId}`);
  }
}
