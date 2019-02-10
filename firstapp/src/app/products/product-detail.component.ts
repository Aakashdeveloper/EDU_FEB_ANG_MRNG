import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IProduct } from './prodect.model';
import { ProductService } from './product.service';


@Component({
    templateUrl: './product-detail.component.html'
})

export class ProductDetailComponent implements OnInit {

    id: number;
    details: IProduct[];

    constructor(private _route: ActivatedRoute,
                private _productService: ProductService,
                private _router: Router) {}

    ngOnInit(): void {
        this.id = this._route.snapshot.params['id'];
        this._productService.getProductDetails(this.id)
            .subscribe((data) => this.details = data);
    }

    onBack(): void {
        this._router.navigate(['/products']);
    }

}

/*
  name: string;
    description: string;
    imageUrl: string;
        this._route
            .queryParams
            .subscribe((data) => {
                this.name = data['qname'];
                this.description = data['desc'];
                this.imageUrl = data['imageUrl'];
            });
*/
