import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';

// Components
import { AppComponent } from './app.component';
import { CustomerFormComponent } from './customerForm/customerForm.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomerFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
