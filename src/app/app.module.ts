import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageindexComponent } from './pageindex/pageindex.component';
import { PageloginComponent } from './pagelogin/pagelogin.component';
import { PageresigterComponent } from './pageresigter/pageresigter.component';
import { PageproductComponent } from './pageproduct/pageproduct.component';
import { PageuserComponent } from './pageuser/pageuser.component';
import { PageproductallComponent } from './pageproductall/pageproductall.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ProductComponent } from './product/product.component';
import { PagecartComponent } from './pagecart/pagecart.component';



@NgModule({
  declarations: [
    AppComponent,
    PageindexComponent,
    PageloginComponent,
    PageresigterComponent,
    PageproductComponent,
    PageuserComponent,
    PageproductallComponent,
    NavbarComponent,
    ProductComponent,
    PagecartComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
