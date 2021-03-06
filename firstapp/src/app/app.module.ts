import {NgModule} from '@angular/core';

// Module
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

// Components
import {AppComponent} from './app.component';
import { OrderComponent } from './orders/orders.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './shared/notFound.component';
import { ProductModule } from './products/products.module';
import { AppRoutingModule } from './app-routing.module';
import { MusicComponent } from './music/music.component';
import { MusicService } from './music/music.service';

// decorator
@NgModule({
    // all your module & routing
    imports: [
        BrowserModule,
        FormsModule,
        HttpClientModule,
        ProductModule,
        AppRoutingModule
    ],
    // all your component & pipes
    declarations: [
        AppComponent,
        OrderComponent,
        HomeComponent,
        NotFoundComponent,
        MusicComponent
    ],
    // only and only first component
    bootstrap: [
        AppComponent
    ],
    // all the services
    providers: [
        MusicService
    ]
})

export class AppModule {

}

