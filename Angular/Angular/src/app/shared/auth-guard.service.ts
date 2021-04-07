import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { ServiceComponent } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(public userService: ServiceComponent, public router: Router) {}
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):
   boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    throw new Error('Method not implemented.');
  }

  // async canActivate() {
  //   if (!await this.userService.userAuthentication()) {
  //     await this.router.navigate(['login']);
  //     return false;
  //   }
  //   return true;
  // }
}
