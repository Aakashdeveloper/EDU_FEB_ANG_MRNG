import { Pipe, PipeTransform} from '@angular/core';
import {IProduct} from './prodect.model';

@Pipe({
    name: 'filterProduct'
})

export class SearchPipe implements PipeTransform {
    transform(value: IProduct[], userInput: string) {
        userInput = userInput ? userInput.toLowerCase() : null;
        return userInput ? value.filter((product: IProduct) =>
            (product.productName.toLowerCase().indexOf(userInput) !== -1)) : value;
    }
}
