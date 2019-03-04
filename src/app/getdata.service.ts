import { Injectable } from '@angular/core';
import { initializeApp, database} from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class GetdataService {

  constructor() { }
  takedata(){
    return database().ref('/product').once('value').then(s=>s.val());
  }
  takesingle(id){
    return database().ref(`/product/${id}`).once('value').then(s=>s.val());
  }
}
