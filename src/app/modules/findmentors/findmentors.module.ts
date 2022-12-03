import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FindmentorsRoutingModule } from './findmentors-routing.module';
import { FindmentorsComponent } from './findmentors/findmentors.component';
import { MaterialModule } from 'src/app/material.module';


@NgModule({
  declarations: [
    FindmentorsComponent
  ],
  imports: [
    CommonModule,
    FindmentorsRoutingModule,
    MaterialModule
  ]
})
export class FindmentorsModule { }
