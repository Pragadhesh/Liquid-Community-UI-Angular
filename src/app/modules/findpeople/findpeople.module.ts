import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FindpeopleRoutingModule } from './findpeople-routing.module';
import { FindpeopleComponent } from './findpeople/findpeople.component';
import { MaterialModule } from 'src/app/material.module';


@NgModule({
  declarations: [
    FindpeopleComponent
  ],
  imports: [
    CommonModule,
    FindpeopleRoutingModule,
    MaterialModule
  ]
})
export class FindpeopleModule { }
