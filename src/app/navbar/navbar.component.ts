import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';


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
  constructor(public firebase: AngularFireAuth, public db: AngularFirestore) {
    
    let userID = firebase.auth.currentUser.uid;
    console.log(userID);
    console.log(firebase.auth.currentUser.email)
    console.log(firebase.auth.currentUser.displayName)
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

    this.featureSelected.emit(feature);
  }

  onPokemonClick(feature: string) {
    this.featureSelected.emit(feature);
  }




}
