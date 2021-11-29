import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  pageTitle: string = 'Product Details';

  constructor(private router: Router) { }

  ngOnInit(): void {

  }

  onBack(): void {
    this.router.navigate(['/products']);
  }
}
