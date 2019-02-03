import {NgModule} from '@angular/core';

// Module
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

// Components
import {AppComponent} from './app.component';
import { DetailComponent } from './detail.component';
import { ProductComponent } from './products/product.component';
import { MyUpperPipe } from './products/myUpper.pipe';
import { DiscountPipe } from './products/discount.pipe';
import { SearchPipe } from './products/productSearch.pipe';
import { StarComponent } from './shared/star.component';
import { ProductService } from './products/product.service';

// decorator
@NgModule({
    // all your module & routing
    imports: [
        BrowserModule,
        FormsModule
    ],

    // all your component & pipes
    declarations: [
        AppComponent,
        DetailComponent,
        ProductComponent,
        MyUpperPipe,
        DiscountPipe,
        SearchPipe,
        StarComponent

    ],

    // only and only first component
    bootstrap: [
        AppComponent
    ],

    // all the services
    providers: [
        ProductService
    ]
})

export class AppModule {

}

