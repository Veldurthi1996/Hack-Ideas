import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { LoginComponent } from 'src/login/Login.component';
import { NewHackathonComponent } from 'src/newHackathon/newHackathon.component';
import { AuthenticationGaurd } from 'src/routeGaurds/Authentication.gaurd';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [AuthenticationGaurd]
  },
  {
    path: 'hackathon',
    component: NewHackathonComponent,
    canActivate: [AuthenticationGaurd]
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
