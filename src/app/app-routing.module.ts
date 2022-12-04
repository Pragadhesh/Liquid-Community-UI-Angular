import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreatesponsorshipComponent } from './modules/createsponsorship/createsponsorship/createsponsorship.component';
import { FindmentorsComponent } from './modules/findmentors/findmentors/findmentors.component';
import { FindpeopleComponent } from './modules/findpeople/findpeople/findpeople.component';
import { HomepageComponent } from './modules/homepage/homepage/homepage.component';
import { RegisterHomeComponent } from './modules/register/register-home/register-home.component';
import { AdminhomeComponent } from './modules/sponsorshipadmin/adminhome/adminhome.component';
import { ViewsponsorshipComponent } from './modules/viewsponsorship/viewsponsorship/viewsponsorship.component';

const routes: Routes = [
  {
    path: '',
    component: HomepageComponent
  },
  {
    path: 'register',
    component: RegisterHomeComponent
  },
  {
    path: 'find',
    component: FindpeopleComponent
  },
  {
    path: 'mentors',
    component: FindmentorsComponent
  },
  {
    path: 'viewsponsorships',
    component: ViewsponsorshipComponent
  },
  {
    path: 'viewmysponsorships',
    component: AdminhomeComponent
  },
  {
    path: 'createsponsorship',
    component: CreatesponsorshipComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
