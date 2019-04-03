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

  mostrar = true;

  fullUser: any = null;

  constructor(public firebase: AngularFireAuth, public db: AngularFirestore) {

    let userID = firebase.auth.currentUser.uid;
    console.log(userID);
    console.log(firebase.auth.currentUser.email)

    //retrieve logged user data

    let docRef = db.collection('users').doc(userID);

    docRef.get().toPromise().then(function (doc) {
      if (doc.exists) {
        console.log("Document data:", doc.data());
        this.fullUser = doc.data()
        console.log("ouput: "+ this.fullUser.email)
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
