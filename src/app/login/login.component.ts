import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { AngularFirestore, AngularFirestoreCollection} from '@angular/fire/firestore';
import {Observable} from 'rxjs';

//database interface
interface Users {
  mailBD: number;
  roleBD: number;
}
//

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email = "";
  password = "";

  //database vars
  usersCol: AngularFirestoreCollection<Users>;
  users: Observable<Users[]>;

  mailDB:string = "";
  roleDB:number = 1; //default 1 is for average user | 2 is for admin
  //

  constructor(public af: AngularFireAuth, private router: Router, private afs: AngularFirestore) { }
  //afs --> database
  ngOnInit() {
  }

  logIn(email, password) {

    this.af.auth.signInWithEmailAndPassword(email, password).then((user) => {
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

    this.af.auth.createUserWithEmailAndPassword(email, password).then((user) => {
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
    this.afs.collection('users').add({'email': this.mailDB, 'role': this.roleDB});
  }




}
