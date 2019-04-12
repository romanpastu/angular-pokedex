
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class RoleGuard implements CanActivate {
  constructor(public db: AngularFirestore) {
  }

   async canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<boolean>  {
    if (localStorage.getItem('user') ) {  
       const doc = await this.db.collection('users')
                 .doc(localStorage.getItem('user'))
                 .get()
                 .toPromise();
       return doc.exists && doc.data().role === 2 ? true : false;
    } else {
      return false;
    }
  }

}
