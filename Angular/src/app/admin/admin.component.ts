import {Component, OnInit, ViewEncapsulation} from '@angular/core';

import {AdminService} from './admin.service';
import {Team} from '../Interfaces/team.model';
import {Match} from '../Interfaces/match.model';
import {MatchStatistics} from '../Interfaces/matchStatistics.model';
import {HttpErrorResponse} from '@angular/common/http';
import {Router} from '@angular/router';
import {Set} from '../Interfaces/set.model';
import {TeamMatch} from '../Interfaces/teamMatch.model';
import {Tournament} from '../Interfaces/tournament.model';
import {TeamStatistics} from '../Interfaces/teamStatistics.model';
import {Player} from '../Interfaces/player.model';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AdminComponent implements OnInit {

  constructor(private formBuilder: FormBuilder,
              private  adminService: AdminService,
              private router: Router) {
  }

  private tournamentList: Tournament[] = [];
  private matchList: Match[] = [];
  private selectedTournamentTeams: TeamMatch[] = [];
  selectedTournament: Tournament;
  selectedMatch: Match;

  saveMatchForm: FormGroup;
  // Save Stats Match Team 1:
  acurracy1: number;
  effectiveness1: number;
  unforcedErrors1: number;
  set1team1: number;
  set2team1: number;
  set3team1: number;
  win1: boolean;

  // Save Stats Match Team 2:
  acurracy2: number;
  effectiveness2: number;
  unforcedErrors2: number;
  set1team2: number;
  set2team2: number;
  set3team2: number;
  win2: boolean;

  statsMatch1: MatchStatistics;
  statsMatch2: MatchStatistics;
  sets: Set[] = [];
  set1: Set;
  set2: Set;
  set3: Set;
  set11: Set;
  set22: Set;
  set33: Set;
  tournamentName: string;


  error: boolean;

  ngOnInit(): void {
    this.adminService.getTournaments().subscribe(
      data => {
        this.tournamentList = data;
      },
      err => error => this.handleError(error)
      /*{
       if( err instanceof HttpErrorResponse ) {
          if (err.status === 401) {
            this.router.navigate(['/login']).then(r => err);
          }
        }

      }*/
    );
    this.statsMatch1 = new class implements MatchStatistics {
      acurracy: number;
      effectiveness: number;
      games_wins: number;
      sets: Set[];
      unforcedErrors: number;
      win: boolean;
    };
    this.statsMatch2 = new class implements MatchStatistics {
      acurracy: number;
      effectiveness: number;
      games_wins: number;
      sets: Set[];
      unforcedErrors: number;
      win: boolean;
    };
    this.set1 = new class implements Set {
      games: number;
      id: number;
      setNumber: number;
    };
    this.set2 = new class implements Set {
      games: number;
      id: number;
      setNumber: number;
    };
    this.set3 = new class implements Set {
      games: number;
      id: number;
      setNumber: number;
    };
    this.set11 = new class implements Set {
      games: number;
      id: number;
      setNumber: number;
    };
    this.set22 = new class implements Set {
      games: number;
      id: number;
      setNumber: number;
    };
    this.set33 = new class implements Set {
      games: number;
      id: number;
      setNumber: number;
    };
    this.sets = [];

    this.saveMatchForm = this.formBuilder.group({
      selectedTeam1: ['', Validators.required],
      selectedTeam2: ['', Validators.required],
      selectedDate: ['', Validators.required]
    });


    this.adminService.getMatchAdmin().subscribe(
      data => {
        this.matchList = data;
      },
      error => this.handleError(error)
    );
    this.selectedTournament = null;
    this.selectedTournamentTeams = null;
  }

  getTournaments() {
    return this.tournamentList;
  }

  getMatchs() {
    return this.matchList;
  }


  private handleError(error: any) {
    console.error(error);
  }

  get f() { return this.saveMatchForm.controls; }

  saveMatch(tournamentName: string) {
    console.error(tournamentName);
    console.error(this.f.selectedTeam1.value);
    console.error(this.f.selectedTeam2.value);
    console.error(this.f.selectedDate.value);
    this.adminService.saveMatch(tournamentName, this.f.selectedTeam1.value, this.f.selectedTeam2.value, this.f.selectedDate.value).subscribe(
      data => {
        console.log('Match: ', data);
        this.error = false;
        this.router.navigate(['']).then(() => this.router.navigate['/admin']);
        // window.location.reload();
      },
      (error: Error) => {
        this.error = true;
        console.error('Error creating new match: ' + error.message);
      });
  }

  statsForm(match: Match) {
    // Stats team 1:
    this.statsMatch1.acurracy = this.acurracy1;

    this.statsMatch1.effectiveness = this.effectiveness1;
    this.statsMatch1.unforcedErrors = this.unforcedErrors1;
    this.set1.games = this.set1team1;
    this.set1.setNumber = 1;
    this.sets.push(this.set1);
    console.log(this.set1);
    this.set2.games = this.set2team1;
    this.set2.setNumber = 2;
    this.sets.push(this.set2);
    console.log(this.set2);
    this.set3.games = this.set3team1;
    this.set3.setNumber = 3;
    this.sets.push(this.set3);
    console.log(this.set3);
    this.statsMatch1.sets = this.sets;
    if (this.win1 != true) {
      this.statsMatch1.win = false;
    } else {
      this.statsMatch1.win = this.win1;
    }
    console.log(this.statsMatch1.sets);
    this.sets = [];

    // Stats team 2:
    this.statsMatch2.acurracy = this.acurracy2;
    this.statsMatch2.effectiveness = this.effectiveness2;
    this.statsMatch2.unforcedErrors = this.unforcedErrors2;
    this.set11.games = this.set1team2;
    this.set11.setNumber = 1;
    this.sets.push(this.set11);
    console.log(this.set11);
    this.set22.games = this.set2team2;
    this.set22.setNumber = 2;
    this.sets.push(this.set22);
    console.log(this.set22);
    this.set33.games = this.set3team2;
    this.set33.setNumber = 3;
    this.sets.push(this.set33);
    console.log(this.set33);
    this.statsMatch2.sets = this.sets;
    if (this.win2 != true) {
      this.statsMatch2.win = false;
    } else {
      this.statsMatch2.win = this.win2;
    }
    console.log(match.id);
    console.log(this.statsMatch1);
    console.log(this.statsMatch2);
    console.log(this.statsMatch1.sets.toString());
    console.log(this.statsMatch2.sets.toString());

    this.adminService.addStatsMatch(match, this.statsMatch1, this.statsMatch2).subscribe(
      data => {
        console.error(data);
        this.error = false;
        this.router.navigate(['']).then(() => this.router.navigate['/admin']);
      },
      (error: Error) => {
        this.error = true;
        console.error('Error saving stat match: ' + error.message);
      },
    );
  }

  saveTournament(tournamentName: string) {
    if (tournamentName == null) {
      this.error = true;
    } else {
      this.adminService.saveTournament(tournamentName).subscribe(
        data => {
          console.error(data);
          this.router.navigate(['']).then(() => this.router.navigate['/admin']);
        },
        (error: Error) => {
          this.error = true;
          console.error('Error creating new player: ' + error);
        }
      );
    }
  }


}
