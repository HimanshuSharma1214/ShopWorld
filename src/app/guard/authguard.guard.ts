import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthguardGuard implements CanActivate {

  jwtToken: any;
  constructor(private router: Router) {

  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const userdetails = localStorage.getItem('token');
    if (userdetails) {
      this.jwtToken = JSON.parse(userdetails);
    }
    if (this.jwtToken) {
      return true;
    }
    this.router.navigateByUrl("");
    return false;
  }

  canActivateChild(route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
    if (this.jwtToken) {
      return true;
    }
    this.router.navigateByUrl("");
    return false;
  }
}
