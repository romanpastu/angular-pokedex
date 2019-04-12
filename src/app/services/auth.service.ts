import { Injectable } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';


//database interface
interface Users {
  mailBD: number;
  roleBD: number;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  @Output() mailOutput = new EventEmitter<string>();

  //database vars
  usersCol: AngularFirestoreCollection<Users>;
  users: Observable<Users[]>;

  mailDB: string = "";
  roleDB: number = 1; //default 1 is for average user | 2 is for admin
  

  constructor(public af: AngularFireAuth, private router: Router, public afs: AngularFirestore) { }



  logIn(email, password) {



    this.af.auth.signInWithEmailAndPassword(email, password).then((user) => {

      this.mailOutput.emit(email);
      //localstorage
      
      localStorage.setItem("user", this.af.auth.currentUser.uid);
      localStorage.setItem("displayName", this.af.auth.currentUser.displayName);
      console.log(localStorage.user + " : local storage");

      this.router.navigate(['/pokemonlist']);
    }).catch(function (error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      if (errorCode === 'auth/wrong-password') {
        alert('Wrong password.');
      } else {
        alert(errorMessage);
      }
      console.log(error);
    });

  }


  sigIn(email, password) {
    var storedUser = null;
    var displayName = prompt("Input your display name");
    this.af.auth.createUserWithEmailAndPassword(email, password).then((user) => {
      storedUser = this.af.auth.currentUser;
      storedUser.updateProfile({
        displayName: displayName,
      });
      //posts the data into de DB
      this.mailDB = email;
      this.addPost();
      //
      alert("Successful signup, proced to login");

    }
    ).catch(function (error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      if (errorCode == 'auth/weak-password') {
        alert('The password is too weak.');
      } else {
        alert(errorMessage);
      }
      console.log(error);
    });
  }

  //function to post into database on signup
  addPost() {
    //used to insert with a custom id 
    this.afs.collection('users').doc(this.af.auth.currentUser.uid).set({
      email: this.mailDB,
      role: this.roleDB
    })
  }




}


