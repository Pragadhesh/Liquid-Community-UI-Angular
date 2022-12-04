import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreatesponsorshipRoutingModule } from './createsponsorship-routing.module';
import { CreatesponsorshipComponent } from './createsponsorship/createsponsorship.component';
import { MaterialModule } from 'src/app/material.module';


@NgModule({
  declarations: [
    CreatesponsorshipComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    CreatesponsorshipRoutingModule
  ]
})
export class CreatesponsorshipModule { }
