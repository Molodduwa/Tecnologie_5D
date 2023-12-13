import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AutoCComponent } from './auto-c/auto-c.component';
import { AutoSuvComponent } from './auto-suv/auto-suv.component';
import { AutoSComponent } from './auto-s/auto-s.component';
import { HomeComponent } from './home/home.component';

/* const routes: Routes = []; */
const routes: Routes = [
  { path: '', redirectTo: '/Home', pathMatch: 'full' },
  { path: 'AutoCompatte', component:AutoCComponent }, 
  { path: 'AutoSportive', component:AutoSComponent }, 
  { path: 'AutoSuv', component:AutoSuvComponent }, 
  { path: 'Home', component:HomeComponent }, 
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
