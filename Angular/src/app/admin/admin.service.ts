import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

import {catchError, map} from 'rxjs/operators';
import {Observable, throwError} from 'rxjs';
import {MatchStatistics} from "../Interfaces/matchStatistics.model";
import {Tournament} from "../Interfaces/tournament.model";
import {Match} from "../Interfaces/match.model";
import {AuthenticationService} from "../authentication.service";
import {Team} from "../Interfaces/team.model";


@Injectable({
  providedIn: 'root'
})
export class AdminService {

  private adminUrl : string;
  private statMatch: MatchStatistics[];
  user: string;
  pass: string;
  //authService: AuthenticationService;

  constructor(private http: HttpClient,private authService: AuthenticationService) {
    this.adminUrl = '/api/tournaments/';
    this.statMatch= [];
  }

  getTournaments() {
    return this.http.get<Tournament[]>(this.adminUrl).pipe(
      map(response => response),
      catchError(err => this.handleError(err))
    );
  }

  getMatchAdmin(){
    return this.http.get<Match[]>("/api/matches/?played=false").pipe(
      map(response => response),
      catchError(err => this.handleError(err))
    );
  }
  private handleError(error: any) {
    console.error(error);
    return throwError('Server error (' + error.status + '): ' + error);
  }
  saveMatch(tournament: string, team1: string, team2: string, date: string){
    console.error(tournament);
    console.error(team1);
    console.error(team2);
    const body = '{ "t1": "'+team1+'","t2": "'+team2+'", "date": "'+date+'" }';
    console.error(body);
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });

    return this.http.post<Match>("/api/match/"+tournament, body, {headers}).pipe(
      map(response => response),
      catchError(err => this.handleError(err))
    );
  }

  /** POST: add a new stats match to the database */
  addStatsMatch (match: Match,statsMatch: MatchStatistics,statsMatch1: MatchStatistics): Observable<Match> {
    this.statMatch[0]=((statsMatch));
    this.statMatch[1]=((statsMatch1));
    const body = JSON.stringify(this.statMatch);
    console.log('ID: '+match.id);
    console.log('Stat Match:'+body);
    this.user = this.authService.getUserName();
    //this.pass = this.authService.getUserPassword();
    this.pass = 'adminpass';
    console.error(this.user);
    console.error(this.pass);
    let auth = window.btoa(this.user + ':' + this.pass);
    const headers = new HttpHeaders({
      Authorization: 'Basic ' + auth,
      'X-Requested-With': 'XMLHttpRequest',
      'Content-Type': 'application/json',
    });
    return this.http.put<Match>("/api/match/"+match.id, body, {headers}).pipe(
      map(response => response),
      catchError(err => this.handleError(err))
    );

  }

  saveTournament(name: string){
    const body = '{ "name": "'+name+'"}';
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });

    return this.http.post<Tournament>("/api/tournament/", body, {headers}).pipe(
      map(response => response),
      catchError(err => this.handleError(err))
    );
  }


}
