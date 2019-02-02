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
        DiscountPipe

    ],

    // only and only first component
    bootstrap: [
        AppComponent
    ],

    // all the services
    providers: [ ]
})

export class AppModule {

}

