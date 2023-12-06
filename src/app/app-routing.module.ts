import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ProductsComponent } from './components/products/products.component';
import { ProductformComponent } from './components/productform/productform.component';
import { DetailsComponent } from './components/details/details.component';

const routes: Routes = [
  {path:'' , component:HomeComponent},
  {path:'home' , component:HomeComponent},
  {path:'products' , component:ProductsComponent},
  {path:'product/:id' , component:DetailsComponent},
  {path:'product/:id/edit' , component:ProductformComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
