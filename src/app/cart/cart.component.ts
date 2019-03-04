import { Component, OnInit } from '@angular/core';
import { GetdataService } from '../getdata.service'
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  constructor(private getdata : GetdataService) { }
  temp: any;
  ngOnInit() {
    this.temp = JSON.parse(localStorage.getItem('cart'));
    console.log(this.temp);

  }
  update(id) {
    const input = (document.getElementsByClassName('input-sl') as HTMLCollection);
    var sl: HTMLInputElement = input[id] as HTMLInputElement;
    console.log(sl.value);
    this.temp[id].sl=sl.value;
    console.log(this.temp[id].sl);
    localStorage.setItem('cart', JSON.stringify(this.temp));
  }
  delete(id: any) {
    this.temp.splice(id, 1);
    localStorage.setItem('cart', JSON.stringify(this.temp));
  }
}
