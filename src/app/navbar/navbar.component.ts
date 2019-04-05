import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import {AuthService} from '../services/auth.service'
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  @Output() featureSelected = new EventEmitter<string>();

  myName;

  fullUser: any;
  name: string;
  constructor(public firebase: AngularFireAuth, public db: AngularFirestore, public router: Router,  private _authS: AuthService) {
    this.firebase.auth.onAuthStateChanged(function(user) {
      if (user) {
        // User is signed in.
        console.log("authstate user:")
        console.log(user);
      } else {
        // No user is signed in.
        prompt("no user");
        console.log('not logged in');
      }
    });
    //
    let userID = firebase.auth.currentUser.uid;
    console.log("----||-----")

    console.log("usuario actual: "+firebase.auth.currentUser.uid);
    console.log("usuario actual nuevo: "+this._authS.authUser)
    console.log(userID);

    // console.log(firebase.auth.currentUser.email)
    // console.log(firebase.auth.currentUser.displayName)
    this.myName = firebase.auth.currentUser.displayName


    //retrieve logged user data

    let docRef = db.collection('users').doc(userID);


    docRef.get().toPromise().then(doc => {
      if (doc.exists) {
        this.fullUser = doc.data();

      } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
      }
    }).catch(function (error) {
      console.log("Error getting document:", error);
    });

    


  }

  ngOnInit() {
  }

  onUsersClick(feature: string) {
    this.router.navigate(['/userlist']);
    this.featureSelected.emit(feature);
  }

  onPokemonClick(feature: string) {
    this.router.navigate(['/pokemonlist']);
    this.featureSelected.emit(feature);
  }

  onSignOut() {
    
  }



}
