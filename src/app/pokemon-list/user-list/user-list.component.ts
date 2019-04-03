import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection , AngularFirestoreDocument} from '@angular/fire/firestore';
import {Observable} from 'rxjs';

interface Users {
  email: string;
  role: string;
}

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  usersCol: AngularFirestoreCollection<Users>;
  users: Observable<Users[]>;


  constructor(private afs: AngularFirestore) {
    this.usersCol = this.afs.collection('users');
    this.users = this.usersCol.valueChanges();
    
   }

  ngOnInit() {
    
  }

  
}
