import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { AddproductbyadminComponent } from './components/addproductbyadmin/addproductbyadmin.component';
import { CartComponent } from './components/cart/cart.component';
import { CategoryComponent } from './components/category/category.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { EditproductbyadminComponent } from './components/editproductbyadmin/editproductbyadmin.component';
import { LoginComponent } from './components/login/login.component';
import { HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http'
import { OrdersComponent } from './components/orders/orders.component';
import { ProductsComponent } from './components/products/products.component';
import { SignupComponent } from './components/signup/signup.component';
import { NavComponent } from './components/nav/nav.component';
import {MaterialModule} from './module/material.module'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ContactComponent } from './components/contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    AddproductbyadminComponent,
    CartComponent,
    CategoryComponent,
    CheckoutComponent,
    EditproductbyadminComponent,
    LoginComponent,
    OrdersComponent,
    ProductsComponent,
    SignupComponent,
    NavComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [
    // {
    //    provide:HTTP_INTERCEPTORS,
    //    useClass:AuthInterceptorService,
    //    multi:true
    // }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
