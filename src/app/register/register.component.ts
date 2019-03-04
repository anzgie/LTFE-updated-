import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { initializeApp, database } from 'firebase';
import * as firebase from 'firebase';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private userservice: UserService) { }
  listuser: any;
  count: 0;
  user: string;
  pw: string;
  email : string;
  ngOnInit() {
    this.userservice.takeuser().then(s => {
      this.listuser = s;
    });
  }

  onSubmit() {
    firebase.database().ref('user/2').set({
      username: this.user,
      email: this.email,
      password : this.pw
    },function(error){
      if (error) {
        alert('The write failed...')
      } else {
        alert('Data saved successfully!')
      }
    });
  // }
    // console.log(this.user);
    // console.log(this.pw);
  }
}
