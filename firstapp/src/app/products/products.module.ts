import { NgModule} from '@angular/core';
import { AppRoutingModule } from '../app-routing.module';

import { ProductComponent } from './product.component';
import { MyUpperPipe } from './myUpper.pipe';
import { DiscountPipe } from './discount.pipe';
import { SearchPipe } from './productSearch.pipe';
import { ProductDetailComponent } from './product-detail.component';
import { ProductService } from './product.service';
import { SharedModule } from '../shared/shared.module';

@NgModule({
    imports: [
        AppRoutingModule,
        SharedModule
    ],
    declarations: [
        ProductComponent,
        MyUpperPipe,
        DiscountPipe,
        SearchPipe,
        ProductDetailComponent
    ],
    providers: [
        ProductService
    ]
})

export class ProductModule {

}
