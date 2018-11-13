import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from '../components/home/home.component';
import { LeagueDetailComponent } from '../components/leagueDetail/leagueDetail.component';

const routes: Routes = [
  {  path: '', redirectTo: 'Home', pathMatch: 'full' },
  {  path: 'Home', component: HomeComponent },
  {  path: 'LeagueDetail/:id', component: LeagueDetailComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
