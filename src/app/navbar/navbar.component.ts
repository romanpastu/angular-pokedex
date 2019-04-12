import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service'
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
  constructor(public firebase: AngularFireAuth, public db: AngularFirestore, public router: Router, private _authS: AuthService) {
    this.firebase.auth.onAuthStateChanged(function (user) {
      if (user) {
        // User is signed in.
      } else {
        // No user is signed in.
        console.log('not logged in');
      }
    });

    let userID = localStorage.getItem('user')

    this.myName = localStorage.getItem('displayName');


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

  onUsersClick() {
    this.router.navigate(['/userlist']);
  }

  onPokemonClick(feature: string) {
    this.router.navigate(['/pokemonlist']);
  }

  onSignOut() {
    localStorage.clear();
  }



}