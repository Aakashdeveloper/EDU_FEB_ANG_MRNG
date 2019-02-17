import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';

// Components
import { AppComponent } from './app.component';
import { CustomerFormComponent } from './customerForm/customerForm.component';
import { FormPosterService } from './services/form-poster.server';

@NgModule({
  declarations: [
    AppComponent,
    CustomerFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    FormPosterService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
