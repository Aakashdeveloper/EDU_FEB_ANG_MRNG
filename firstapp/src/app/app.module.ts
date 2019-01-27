import {NgModule} from '@angular/core';

// Module
import { BrowserModule } from '@angular/platform-browser';

// Components
import {AppComponent} from './app.component';
import { DetailComponent } from './detail.component';
import { ProductComponent } from './products/product.component';

// decorator
@NgModule({
    // all your module & routing
    imports: [
        BrowserModule
    ],

    // all your component & pipes
    declarations: [
        AppComponent,
        DetailComponent,
        ProductComponent
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

