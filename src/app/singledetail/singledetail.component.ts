import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HomepageComponent } from '../homepage/homepage.component';
import { GetdataService } from '../getdata.service';
@Component({
  selector: 'app-singledetail',
  templateUrl: './singledetail.component.html',
  styleUrls: ['./singledetail.component.css']
})
export class SingledetailComponent implements OnInit {


  constructor(
    private getdataservice: GetdataService,
    private route: ActivatedRoute,
    private location: Location,
    private addcart: HomepageComponent) { }

  product: any;
  id: any;
  cart: any = [];

  ngOnInit() {
    console.log('aaaaaa');
    this.getProductDetail();
  }
  
  getProductDetail(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.getdataservice.takesingle(id).then(s => {
      this.product = s;
      console.log(this.product);
    });
  }
}
