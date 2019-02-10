import { Injectable} from '@angular/core';
import { IProduct } from './prodect.model';
import { HttpClient } from '@angular/common/http';
// import {Http, Response} from '@angular/http';
import { Observable } from 'rxjs';
// import { map } from 'rxjs/operators';

@Injectable()

export class ProductService {

    private _productUrl = 'https://ngproductsparam.herokuapp.com/api/getProductDetails';

    constructor(private _http: HttpClient) {}

    getProducts(): Observable<IProduct[]> {
        return this._http.get<IProduct[]>(`${this._productUrl}`);
    }

    getProductDetails(id): Observable<IProduct[]> {
        return this._http.get<IProduct[]>(`${this._productUrl}?productId=${id}`);
    }
}



/*
private _htt: Http
    getProducts(): Promise<IProduct[]> {
        return this._http.get(this._productUrl)
            .toPromise()
            .then((res) => res.json());
    }
    private extractData(res: Response) {
            return res.json();
    }
    getProducts(): Observable<IProduct[]> {
        return this._htt.get(this._productUrl)
            .pipe(map(this.extractData));

    }

*/
