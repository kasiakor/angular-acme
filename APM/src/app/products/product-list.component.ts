import { Component, OnDestroy, OnInit } from "@angular/core";
import { Subscription } from "rxjs";
import { IProduct } from "./product";
import { ProductService } from "./product.service";

@Component({
    selector: 'pm-products',
    templateUrl: "./product-list.component.html",
    styleUrls: ["./product-list.component.css"]
})

export class ProductListComponent implements OnInit, OnDestroy{
    pageTitle: string = 'Product List';
    imageWidth: number = 50;
    imageMargin: number = 2;
    showImage: boolean = false;
    errorMessage: string = ' ';
    sub!: Subscription;
    
    private _listFilter: string = '';
    
    public get listFilter() : string {
        return this._listFilter;
    }
    public set listFilter(v : string) {
        this._listFilter = v;
        console.log('Setter is:', v);
        this.filteredProducts = this.filterProducts(v);
    }
    
    filteredProducts: IProduct[] = [];
    products: IProduct[] = [];

    constructor(private productService: ProductService){}
   
    toggleImage(): void {
        this.showImage = !this.showImage;
    }

    ngOnInit(): void {
        this.sub = this.productService.getProducts().subscribe({
            next: products =>  {
                this.products = products;
                this.filteredProducts = this.products;
            },
            error: err => this.errorMessage = err
        });
        
    }

    ngOnDestroy(): void {
        this.sub.unsubscribe();
    }


    filterProducts(filterBy: string): IProduct[] {
        filterBy = filterBy.toLowerCase();
        return this.products.filter((product: IProduct) => product.productName.toLowerCase().includes(filterBy));
}
}
