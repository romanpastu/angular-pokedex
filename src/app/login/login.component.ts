import { Component, OnInit, Output , EventEmitter } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { AngularFirestore, AngularFirestoreCollection} from '@angular/fire/firestore';
import {Observable} from 'rxjs';
import {AuthService} from '../services/auth.service'

//database interface
interface Users {
  mailBD: number;
  roleBD: number;
}
//

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [AuthService]
})
export class LoginComponent implements OnInit {
  

  constructor(private _authS: AuthService) { }

  ngOnInit() {
  }

  logIn(email, password) {
    this._authS.logIn(email,password);
  }


  sigIn(email, password) {
    this._authS.sigIn(email,password);
  }

 




}
