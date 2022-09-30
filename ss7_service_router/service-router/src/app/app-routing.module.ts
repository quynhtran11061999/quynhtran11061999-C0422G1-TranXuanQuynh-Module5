import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {DictionaryComponent} from "./dictionary/dictionary.component";
import {DictionaryDetailComponent} from "./dictionary-detail/dictionary-detail.component";
import {ProductListComponent} from "./product/product-list/product-list.component";
import {ProductCreateComponent} from "./product/product-create/product-create.component";
import {ProductUpdateComponent} from "./product/product-update/product-update.component";


const routes: Routes = [
  // {path: "", component: DictionaryComponent},
  // {path: ":word", component: DictionaryDetailComponent},
  {path:"product/list",component: ProductListComponent},
  {path:"product/create",component: ProductCreateComponent},
  {path:"product/update/:id",component: ProductUpdateComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}