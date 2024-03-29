import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {User} from './Interfaces/user.model';
import {Observable, throwError} from 'rxjs';
import {Player} from './Interfaces/player.model';

@Injectable()
export class AuthenticationService {
  private _isLogged = false;
  private _isAdmin = false;
  private _user: User;
  private _auth: string;

  get isLogged(): boolean {
    return this._isLogged;
  }

  set isLogged(value: boolean) {
    this._isLogged = value;
  }

  get isAdmin(): boolean {
    return this._isAdmin;
  }

  set isAdmin(value: boolean) {
    this._isAdmin = value;
  }

  getUser(): User {
    return this._user;
  }

  getUserName(): string {
    console.error(this._user.name);
    return this._user.name;
  }

  getUserPassword(): string {
    return this._user.passwordHash;
  }

  set user(value: User) {
    this._user = value;
  }

  get auth(): string {
    return this._auth;
  }

  set auth(value: string) {
    this._auth = value;
  }

  constructor(private http: HttpClient) {
    const user = JSON.parse(localStorage.getItem('currentUser'));
    if (user) {
      this.setCurrentUser(user);
    }
  }

  login(user: string, pass: string) {
    console.log(user);
    console.log(pass);
    const auth = window.btoa(user + ':' + pass);
    const headers = new HttpHeaders({
      Authorization: 'Basic ' + auth,
      'X-Requested-With': 'XMLHttpRequest',
    });
    console.log(headers);
    return this.http.get<User>('/api/logIn', {headers}).pipe(map(
      user => {
        console.log(user);
        if (user) {
          this.setCurrentUser(user);
          user.authdata = auth;
          localStorage.setItem('currentUser', JSON.stringify(user));
        }
        return user;
      }
    ));
  }

  logOut() {
    console.error('LOG OUT SERVICE');
    return this.http.get('/api/logOut').pipe(map(response => {
      this.removeCurrentUser();
      return response;
    }));
  }

  saveUser(user: User): Observable<User> {
    console.log('userSave:' + user.name);
    console.log('userSave:' + user.passwordHash);
    console.log('userSave:' + user.mail);

    const body = JSON.stringify(user);
    console.log(body);
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });

    return this.http.post<User>('/api/user', body, {headers}).pipe(
      map(response => response)
      // catchError(err => this.handleError(err))
    );
  }

  savePlayer(player: Player): Observable<Player> {
    console.log('player:' + player.aceleration);
    console.log('userID:' + player.idUser);

    const body = JSON.stringify(player);
    console.log(body);
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });

    return this.http.post<Player>('/api/player', body, {headers}).pipe(
      map(response => response)
      // catchError(err => this.handleError(err))
    );
  }

  private setCurrentUser(user: User) {
    this._isLogged = true;
    console.log('USEEEEEEEEER: ' + user.name);
    this._user = user;
    // this.isAdmin = this.user.roles.indexOf('ROLE_ADMIN') !== -1;
  }

  removeCurrentUser() {
    localStorage.removeItem('currentUser');
    this._isLogged = false;
    this._isAdmin = false;
    this._user = null;
  }

  private handleError(error: any) {
    console.error(error);
    return throwError('Server error (' + error.status + '): ' + error);
  }
}
