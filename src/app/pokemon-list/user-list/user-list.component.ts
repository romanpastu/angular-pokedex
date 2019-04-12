import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

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


  constructor(public afs: AngularFirestore) {
    this.usersCol = this.afs.collection('users');
    this.users = this.usersCol.valueChanges();

  }

  ngOnInit() {

  }

  onChangeRole(email) {
    const usersColl = this.afs.collection("users"); usersColl.get().toPromise().then(function (querySnapshot) {
      querySnapshot.forEach(function (doc) { 
        // doc.data() is never undefined for query doc snapshots 
        if (doc.data().email == email) { 
          if(doc.data().role == 1){
            usersColl.doc(doc.id).set({ role: 2 }, { merge: true }) 
          }else if(doc.data().role == 2){
            usersColl.doc(doc.id).set({ role: 1 }, { merge: true }) 
          }
        }
      });
    });
  }


}
