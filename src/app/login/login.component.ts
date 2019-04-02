import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email = "";
  password = "";
  constructor(public af: AngularFireAuth, private router: Router) { }

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
      alert("Successful signup, proced to login")
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




}
