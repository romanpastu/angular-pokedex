
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class RoleGuard implements CanActivate {
  data2 //variable to store the role of the current user , (1 or 2) . If its 2 the canActivate should return true.

  constructor(public db: AngularFirestore, private myRoute: Router) {
    //role extraction 
    //We get the role by comparing the uid , and store it in the "data2" var
    var docRef = this.db.collection('users').doc(localStorage.getItem('user'));


    docRef.get().toPromise().then(doc => {
      if (doc.exists) {
        this.data2 = doc.data().role;
        console.log("data role")
        console.log(this.data2)
        // localStorage.setItem("role", this.data2);
      }
    });


  }

  canActivate() {

    console.log(this.data2)
    //if data2 is 2, means that the redirection should work
    if (localStorage.getItem('user') && this.data2 == 2) {
      console.log("ROLE GUARD")
      return true;
    } else {
      console.log("ROLE NO GUARD")
      // localStorage.clear();
      return false;
    }

  }

}
