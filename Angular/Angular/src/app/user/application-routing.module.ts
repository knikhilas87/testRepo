import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../auth/auth.guard';
import { ApplicationDetailsComponent } from './application-details/application-details.component';
import { SearchDetailsComponent } from './search-details/search-details.component';

const routes: Routes = [
{path : 'applicationform', component : ApplicationDetailsComponent, canActivate: [AuthGuard]},
{path : 'search', component : SearchDetailsComponent, canActivate: [AuthGuard]}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class ApplicationRoutingModule { }
