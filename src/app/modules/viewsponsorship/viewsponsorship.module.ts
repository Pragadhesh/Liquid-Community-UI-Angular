import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ViewsponsorshipRoutingModule } from './viewsponsorship-routing.module';
import { ViewsponsorshipComponent } from './viewsponsorship/viewsponsorship.component';
import { MaterialModule } from 'src/app/material.module';


@NgModule({
  declarations: [
    ViewsponsorshipComponent
  ],
  imports: [
    CommonModule,
    ViewsponsorshipRoutingModule,
    MaterialModule
  ]
})
export class ViewsponsorshipModule { }
