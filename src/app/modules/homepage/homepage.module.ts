import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomepageRoutingModule } from './homepage-routing.module';
import { HomepageComponent } from './homepage/homepage.component';
import { MaterialModule } from 'src/app/material.module';
import { LoginModalComponent } from './login-modal/login-modal.component';


@NgModule({
  declarations: [
    HomepageComponent,
    LoginModalComponent
  ],
  imports: [
    CommonModule,
    HomepageRoutingModule,
    MaterialModule
  ]
})

export class HomepageModule { }
