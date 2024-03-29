import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientJsonpModule} from '@angular/common/http';

import {AppRoutingModule} from './app-routing.module';
import { PanelModule } from 'primeng/panel';
import { InputTextModule } from 'primeng/inputtext';
import { CardModule } from 'primeng/card';
import { AccordionModule } from 'primeng/accordion';
import {CheckboxModule} from 'primeng/checkbox';
import {FileUploadModule} from 'primeng/fileupload';


import {AdminComponent} from './admin/admin.component';
import {PlayerComponent} from './player/player.component';
import {SignUpComponent} from './signUp/signUp.component';
import {LoginComponent} from './logIn/login.component';
import {ForbiddenComponent} from './forbidden/forbidden.component';
import {SignUpPlayerComponent} from './signUpPlayer/signUpPlayer.component';
import {SignUpPlayerImageComponent} from './signUpPlayer/signUpPlayerImage.component';
import {HomeComponent} from './home/home.component';
import {TournamentComponent} from './tournament/tournament.component';
import {TournamentRankingComponent} from './tournament/tournament-ranking/tournament-ranking.component';
import {MatchComponent} from './match/match.component';
import {NextMatchesComponent} from './home/next-matches/next-matches.component';
import {LastMatchesComponent} from './home/last-matches/last-matches.component';
import {CarouselComponent} from './home/carousel/carousel.component';
import {MatchesComponent} from './matches/matches.component';
import {NextMatchesDateComponent} from './matches/next-matches-date/next-matches-date.component';
import {NotFoundComponent} from './not-found/not-found.component';
import {TeamComponent} from './teams/teamPage/team.component';
import {ImagesComponent} from './images/images.component';
import {LogOutComponent} from './logOut/logOut.component';
import {AuthGuard} from './auth.guard';
import {ProgressBarModule} from 'primeng/progressbar';
import {ProgressSpinnerModule} from 'primeng/progressspinner';
import {CarouselModule} from 'primeng/carousel';
import {AuthenticationService} from './authentication.service';

import {BasicAuthInterceptor} from './basic-auth.interceptor';
import {ErrorInterceptor} from './error.interceptor';

import {AppComponent} from './app.component';
import {ChartModule} from 'primeng/chart';
import {RadarComponent} from './player/radar/radar.component';
import {LinechartComponent} from './teams/charts/linechart/linechart.component';
import {BarchartComponent} from './teams/charts/barchart/barchart.component';
import {HeaderComponent} from './header/header.component';
import {FooterComponent} from './footer/footer.component';
import {ButtonModule} from 'primeng/button';
import {TabViewModule} from 'primeng/tabview';
import {DonutchartComponent} from './teams/charts/donutchart/donutchart.component';
import {TeamListComponent} from './teams/teamList.component';
import {TeamsOfTournamentComponent} from './teams/teamsOfTournament/teamsOfTournament.component';
import { TournamentRegistrationComponent } from './tournament/tournament-registration/tournament-registration.component';
import {DropdownModule} from 'primeng/dropdown';
import { AfterIfDirective } from './tournament/after-if.directive';
import {NgxPaginationModule} from "ngx-pagination";
import {HashLocationStrategy, LocationStrategy} from '@angular/common';
@NgModule({
  declarations: [
    FooterComponent,
    HeaderComponent,
    AppComponent,
    HomeComponent,
    TournamentComponent,
    TournamentRankingComponent,
    MatchComponent,
    NextMatchesComponent,
    LastMatchesComponent,
    CarouselComponent,
    MatchesComponent,
    NextMatchesDateComponent,
    NotFoundComponent,
    ForbiddenComponent,
    PlayerComponent,
    TeamComponent,
    TeamListComponent,
    TeamsOfTournamentComponent,
    ImagesComponent,
    AdminComponent,
    SignUpComponent,
    LoginComponent,
    SignUpPlayerComponent,
    SignUpPlayerImageComponent,
    LogOutComponent,
    RadarComponent,
    LinechartComponent,
    BarchartComponent,
    DonutchartComponent,
    TournamentRegistrationComponent,
    AfterIfDirective
  ],
  imports: [
    CardModule,
    ProgressSpinnerModule,
    BrowserAnimationsModule,
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientJsonpModule,
    ChartModule,
    PanelModule,
    ButtonModule,
    InputTextModule,
    CardModule,
    AccordionModule,
    CheckboxModule,
    ProgressBarModule,
    CarouselModule,
    ButtonModule,
    TabViewModule,
    DropdownModule,
    NgxPaginationModule,
    FileUploadModule
  ],
  providers: [AuthenticationService, AuthGuard,
    { provide: HTTP_INTERCEPTORS, useClass: BasicAuthInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    { provide: LocationStrategy, useClass: HashLocationStrategy}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
