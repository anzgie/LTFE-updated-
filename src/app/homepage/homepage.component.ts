import { Component, OnInit } from '@angular/core';
import { GetdataService } from '../getdata.service';
import { connectableObservableDescriptor } from 'rxjs/internal/observable/ConnectableObservable';
import { CartComponent } from '../cart/cart.component';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  constructor(private getdataservice: GetdataService) { }
  listproducts: any;
  cart: any = [];

  ngOnInit() {
    this.getdataservice.takedata().then(s => {
      this.listproducts = s;
    });
  }
  callCart(id): any {
    this.getdataservice.takesingle(id).then(s => {
      console.log(s);
      this.cart = JSON.parse(localStorage.getItem('cart')) || [];

      if (this.cart.length >= 0) {
        s.sl=1;
        this.cart.push(s);
      }
      // else {
      //   for (let i = 0; i <= this.cart.length; i++) {
      //     if (this.cart[i].name == s.name) {
      //       this.cart[i].sl += 1;
      //     }
      //     else {
      //       this.cart.push(s);
      //     }
      //   }
      // }
      localStorage.setItem('cart', JSON.stringify(this.cart));
      return this.cart;
    });

  }
}