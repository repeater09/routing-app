import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ButtonComponent } from './button/button.component';
import { AlertComponent } from './alert/alert.component';
import { FontComponent } from './font/font.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: 'button', component: ButtonComponent },
  { path: 'alert', component: AlertComponent },
  { path: 'font', component: FontComponent },
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  
}
