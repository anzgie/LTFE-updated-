import { Component, OnInit } from '@angular/core';
import { GetdataService } from '../getdata.service';
import * as firebase from 'firebase';
@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.css']
})
export class CRUDComponent implements OnInit {

  constructor(private getdataservice: GetdataService) { }
  listproducts: any;
  product: any;
  id: any;
  ngOnInit() {
    this.getdataservice.takedata().then(s => {
      this.listproducts = s;
    });
  }
  selected(id): void {
    this.getdataservice.takesingle(id).then(s => {
      this.product = s;
      this.id = id;
      // console.log(this.product);
    });
  }
  addCrud() {
    this.getdataservice.takedata().then((s) => {
      const products = s;
      var keys = Object.keys(products);
      const temp = keys.map(Number);
      const id = Math.max.apply(null, temp) + 1;
      firebase.database().ref('product/' + id).set({
        name: this.product.name,
        price: this.product.price,
        image: this.product.pic,
        detail: this.product.detail
      }, function (error) {
        if (error) {
          console.log('fail');
        } else {
          alert('Add Successfully');
        }
      });
      this.getdataservice.takedata().then(s => {
        this.product = s;
      });
    });
  }

  updateCrud() {
    var updates = {};
    updates['/product/' + this.id] = this.product;
    firebase.database().ref().update(updates);
    this.getdataservice.takedata().then(s => {
      this.product = s;
    });
  }
  deletedCrud(id) {
    var updates = {};
    updates['/product/' + id] = null;
    firebase.database().ref().update(updates);
    this.getdataservice.takedata().then(s => {
      this.product = s;
    });
  }
}
