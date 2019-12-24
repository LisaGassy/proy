import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';
import { AaaComponent } from './aaa/aaa.component';
import { MainComponent } from './main/main.component';


const routes: Routes = [
  {path:'',component:MainComponent},
  {path:'main',component:MainComponent},
  {path:'login',component:AaaComponent},
  {path:'**',component:NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
