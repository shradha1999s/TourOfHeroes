import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroDetailsComponent } from './hero-details/hero-details.component';
import { HeroesComponent } from './heroes/heroes.component';

const routes: Routes = [
  {path:"hero-details/:id", component : HeroDetailsComponent},
  {path:"heroes",component : HeroesComponent},
  {path:"dashboard", component : DashboardComponent},
  {path:'', redirectTo:'dashboard',  pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
