

import {MatCardModule} from '@angular/material/card';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import {MatchComponent} from './match/match.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatProgressBarModule} from "@angular/material/progress-bar";
import {MatGridListModule} from "@angular/material/grid-list";
import {BrowserModule} from '@angular/platform-browser';
import {FlexLayoutModule} from '@angular/flex-layout';
import {NgModule} from '@angular/core';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {HttpClientJsonpModule} from "@angular/common/http";
import {MatCarouselModule} from '@ngmodule/material-carousel';
import {AdminComponent} from "./admin/admin.component";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatSelectModule} from "@angular/material/select";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {SignUpComponent} from "./signUp/signUp.component";
import {LoginComponent} from "./logIn/login.component";
import {AuthenticationService} from "./authentication.service";
import {AuthGuard} from "./auth.guard";
import {AdminService} from "./admin/admin.service";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {MatIconModule} from "@angular/material/icon";
import {MatDialogModule} from "@angular/material/dialog";
import {BasicAuthInterceptor} from "./basic-auth.interceptor";
import {ErrorInterceptor} from "./error.interceptor";


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MatchComponent,
    AdminComponent,
    SignUpComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpClientJsonpModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,

    MatProgressBarModule,
    MatGridListModule,

    MatGridListModule,
    MatCarouselModule,
    MatFormFieldModule,
    MatSelectModule,
    FormsModule,
    ReactiveFormsModule,

    FlexLayoutModule,
    MatCheckboxModule,
    MatIconModule,
    MatDialogModule
  ],
  providers: [AuthenticationService, AuthGuard,
    { provide: HTTP_INTERCEPTORS, useClass: BasicAuthInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
