import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';


const routes: Routes = [
  { path: 'login', component: SignInComponent },
{path : 'signUp', component : SignUpComponent},
{path : 'logout', component : HomeComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
