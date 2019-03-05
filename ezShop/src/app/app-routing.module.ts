import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { HomeComponent } from './home/home.component';
import { BestDealsComponent } from './best-deals/best-deals.component';
import { DetailsProduitComponent } from './details-produit/details-produit.component';
import { PanierComponent } from './panier/panier.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'contactUs', component: ContactUsComponent},
  {path: 'bestDeals', component: BestDealsComponent},
  {path: 'details/:id', component: DetailsProduitComponent},
  {path: 'cart', component: PanierComponent},
  {path: '', component: HomeComponent},
  {path: '**', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {onSameUrlNavigation: 'reload'})],
  exports: [RouterModule],
})
export class AppRoutingModule { }
