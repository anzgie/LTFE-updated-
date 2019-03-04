import { Injectable } from '@angular/core';
import { initializeApp, database } from 'firebase';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private router: Router) {


  }
  takeuser(){
    return database().ref('/user').once('value').then(s=>s.val());
  }
  logout() {
    localStorage.removeItem('user');
    this.router.navigateByUrl('');
  }
}
