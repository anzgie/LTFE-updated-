import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private userservice: UserService,
    private router: Router
    ) { }
  user: string;
  pw: string;

  listuser: any;

  ngOnInit() {
    this.userservice.takeuser().then(s => {
      this.listuser = s;
    });
  }

  onSubmit() {
    for(let i=0;i< this.listuser.length;i++){
    // this.listuser.forEach(element => {
      if (this.listuser[i].username == this.user && this.listuser[i].password == this.pw) {
        console.log("true");
        localStorage.setItem('user', this.listuser[i].username);
        alert('Log In Success');
        this.router.navigateByUrl('');
        break;
      }
      else {
        //chua co tai khoan
        console.log('false');
      }
    };
    // console.log(this.user);
    // console.log(this.pw);
  }
  logout()
  {
    localStorage.removeItem('user');
    this.router.navigateByUrl('');
  }

}
