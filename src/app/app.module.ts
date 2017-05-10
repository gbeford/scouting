import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
 import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MaterialModule} from '@angular/material';



import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MatchEntryComponent } from './match-entry/match-entry.component';
import { PitEntryComponent } from './pit-entry/pit-entry.component';
import { TeamListComponent } from './team-list/team-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MatchEntryComponent,
    PitEntryComponent,
    TeamListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
