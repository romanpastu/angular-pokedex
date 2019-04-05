import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import {AuthService} from '../app/services/auth.service'

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private afAuth: AngularFireAuth,
    private myRoute: Router, private _authS: AuthService){
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if(this._authS.authUser){ //this.afAuth.auth.currentUser
        console.log(this._authS.authUser)
        console.log("real");
        return true;
      }else{
        console.log("falso");
        this.myRoute.navigate(["login"]);
        return false;
      }
  }

}
