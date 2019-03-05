import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FormsModule } from '@angular/forms';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { HomeComponent } from './home/home.component';
import { BestDealsComponent } from './best-deals/best-deals.component';
import { HttpClientModule } from '@angular/common/http';
import { CardProduitComponent } from './card-produit/card-produit.component';
import { CategoriesComponent } from './categories/categories.component';
@NgModule({
  declarations: [
    AppComponent,
    ContactUsComponent,
    HomeComponent,
    BestDealsComponent,
    CardProduitComponent,
    CategoriesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
