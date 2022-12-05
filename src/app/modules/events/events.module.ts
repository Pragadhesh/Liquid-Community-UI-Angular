import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EventsRoutingModule } from './events-routing.module';
import { EventhomeComponent } from './eventhome/eventhome.component';
import { MaterialModule } from 'src/app/material.module';


@NgModule({
  declarations: [
    EventhomeComponent
  ],
  imports: [
    CommonModule,
    EventsRoutingModule,
    MaterialModule
  ]
})
export class EventsModule { }
