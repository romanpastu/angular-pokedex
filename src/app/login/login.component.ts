import { Component, OnInit} from '@angular/core';
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
