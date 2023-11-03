import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailProduitComponent } from './detail-produit/detail-produit.component';
import { ProduitComponent } from './produit/produit.component';

const routes: Routes = [
  {
    path:"details",component:DetailProduitComponent
  }
  ,
  {
    path:"",component:ProduitComponent
  }

];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
