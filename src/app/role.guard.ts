import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class RoleGuard implements CanActivate {
  data2 
  constructor(public db: AngularFirestore, private myRoute: Router){

  }
  canActivate()
    {
    var docRef = this.db.collection('users').doc(localStorage.getItem('user'));
    
      
    docRef.get().toPromise().then(doc => {
      if (doc.exists) {
        this.data2 = doc.data().role;
        console.log("data role")
        console.log(this.data2) 
        
      } 
    });
    if(this.data2 == 2 && localStorage.getItem('user')){
      console.log("ROLE GUARD")
      return true;
    }else{
      console.log("ROLE NO GUARD")
      // localStorage.clear();
      return false;
    }
    
    
  }
  
}
