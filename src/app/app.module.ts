import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageModule } from './modules/homepage/homepage.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { RegisterModule } from './modules/register/register.module';
import { HttpClientModule } from '@angular/common/http';
import { FindpeopleModule } from './modules/findpeople/findpeople.module';
import { FindmentorsModule } from './modules/findmentors/findmentors.module';
import { ViewsponsorshipModule } from './modules/viewsponsorship/viewsponsorship.module';
import { SponsorshipadminModule } from './modules/sponsorshipadmin/sponsorshipadmin.module';
import { CreatesponsorshipModule } from './modules/createsponsorship/createsponsorship.module';
import { EventsModule } from './modules/events/events.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomepageModule,
    RegisterModule,
    FindpeopleModule,
    FindmentorsModule,
    ViewsponsorshipModule,
    SponsorshipadminModule,
    CreatesponsorshipModule,
    EventsModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
