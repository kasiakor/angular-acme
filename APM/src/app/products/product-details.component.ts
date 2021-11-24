import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  pageTitle: string = 'Product Details';

  constructor() { }

  ngOnInit(): void {
  }

}
