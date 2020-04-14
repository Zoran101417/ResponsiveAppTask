import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ResponsiveScreenComponent} from './responsive-screen/responsive-screen.component';


const routes: Routes = [
  {path: 'responsive-screen', component: ResponsiveScreenComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
