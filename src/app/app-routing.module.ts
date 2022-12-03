import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FindmentorsComponent } from './modules/findmentors/findmentors/findmentors.component';
import { FindpeopleComponent } from './modules/findpeople/findpeople/findpeople.component';
import { HomepageComponent } from './modules/homepage/homepage/homepage.component';
import { RegisterHomeComponent } from './modules/register/register-home/register-home.component';

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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
