import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private afAuth: AngularFireAuth,
    private myRoute: Router){
  }

  // canActivate(
  //   next: ActivatedRouteSnapshot,
  //   state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
  //     if(this.afAuth.auth.currentUser){
  //       return true;
  //     }else{
  //       this.myRoute.navigate(["login"]);
  //       return false;
  //     }
  // }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if(localStorage.getItem('user') || this.afAuth.auth.currentUser){
        console.log("user ist logged in ....", localStorage.getItem('user'));
        return true;
      }else{
        console.log("user is not logged in");
        this.myRoute.navigate(["/login"]);
        return false;
      }
  }
  
}
