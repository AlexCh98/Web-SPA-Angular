import {Component, Input, OnInit} from '@angular/core';
import {TeamTournament} from '../../Interfaces/teamTournament.model';
import {TournamentRankingService} from "../../tournament/tournament-ranking/tournament-ranking.service";

@Component({
  selector: 'app-teamsOfTournament',
  templateUrl: './teamsOfTournament.component.html',
  styleUrls: ['./teamsOfTournament.component.css']
})
export class TeamsOfTournamentComponent implements OnInit {

  @Input()
  private id: number;

  private ranking: TeamTournament[];


  constructor(private tournamentRankingService: TournamentRankingService) {
  }

  ngOnInit(): void {

    this.tournamentRankingService.getTournamentRanking(this.id).subscribe(
      data => {
        this.ranking = data;
        console.log('ranking (' + this.id + '): ', data);
      },
      error => this.handleError(error)
    );
  }

  getRanking(): TeamTournament[] {
    return this.ranking;
  }

  private handleError(error: any) {
    console.error(error);
  }
}
