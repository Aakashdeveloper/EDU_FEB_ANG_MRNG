import { Component, OnInit} from '@angular/core';
import { IProduct } from './prodect.model';
import { ProductService } from './product.service';

@Component({
    selector: 'app-prod',
    templateUrl: './product.component.html',
    // styles: ['thead{color:purple}', 'h4{color:teal}'],
    styles: [`
        .onlineClass{
            color:white
        }
    `],
    styleUrls: ['./product.component.css']
})

export class ProductComponent implements OnInit {
    title: String = '****Product App****';
    filterby: String = '~Filter By~';
    message: String ;
    showImage: Boolean = true;
    searchData: String;
    imageWidth: Number = 100;
    products: IProduct[];
    serverStatus: String = 'offline';

    constructor(private _productSerice: ProductService) {
        this.serverStatus = Math.random() > 0.5 ? 'Online' : 'Offline';
    }

    toggleImage(): void {
        this.showImage = !this.showImage;
    }

    onDataRecive(Recivemessage: string): void {
        this.message = 'message is' + Recivemessage;
    }

    ngOnInit(): void {
       this._productSerice.getProducts()
       .subscribe((data) => this.products = data);
    }

    getColor() {
        return this.serverStatus === 'Online' ? 'green' : 'red';
    }

}


/*
function add(){
    return a+b
}

add(1,2)
*/

