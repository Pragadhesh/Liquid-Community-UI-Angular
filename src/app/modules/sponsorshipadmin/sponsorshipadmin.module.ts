import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SponsorshipadminRoutingModule } from './sponsorshipadmin-routing.module';
import { AdminhomeComponent } from './adminhome/adminhome.component';
import { MaterialModule } from 'src/app/material.module';


@NgModule({
  declarations: [
    AdminhomeComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    SponsorshipadminRoutingModule
  ]
})
export class SponsorshipadminModule { }
