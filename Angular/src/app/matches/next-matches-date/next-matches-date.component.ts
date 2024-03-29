import {AfterViewInit, Component, Input, OnInit} from '@angular/core';
import {MatchesOnDate} from '../../Interfaces/matchesOnDate.model';
import {Match} from '../../Interfaces/match.model';

@Component({
  selector: 'app-next-matches-date',
  templateUrl: './next-matches-date.component.html',
  styleUrls: ['./next-matches-date.component.css']
})
export class NextMatchesDateComponent implements OnInit, AfterViewInit {

  @Input()
  public matchesByDate: MatchesOnDate [] = [];
  private show = false;

  private dates: string[] = [];
  private dateShowing: number;


  constructor() {
    this.dateShowing = 0;
  }

  ngOnInit(): void {
    this.dateShowing = 0;
  }

  ngAfterViewInit(): void {
    this.dateShowing = 0;
  }

  NextDate() {
    this.updateDates();
    this.dateShowing++;
    if (this.dateShowing > (this.dates.length - 1)) {
      this.dateShowing -= this.dates.length;
    }
    console.log('dateShowing: ' + this.dateShowing);
  }

  PrevDate() {
    this.updateDates();
    this.dateShowing--;
    if (this.dateShowing < 0) {
      this.dateShowing += this.dates.length;
    }
    console.log('dateShowing: ' + this.dateShowing);
  }


  getDate() {
    this.updateDates();
    console.log('Date showing:' + this.dateShowing);
    return this.dates[this.dateShowing];
  }


  toggleShow() {
    this.show = true;
    if (this.show) {
      this.updateDates();
    }
  }

  getShow() {
    return this.matchesByDate !== undefined;
  }

  private updateDates() {
    this.dates = [];
    for (const obj of this.matchesByDate) {
      this.dates.push(obj.date);
    }
  }

  getMatchesOnDate() {
    const date = this.getDate();
    let matches: Match[] = [];
    for (const obj of this.matchesByDate) {
      if (obj.date === date) {
        matches = obj.matches;
      }
    }
    return matches;
  }


}
