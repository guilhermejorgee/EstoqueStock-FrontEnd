import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CategoriasComponent } from './categorias/categorias.component';
import { EstoqueComponent } from './estoque/estoque.component';
import { ProdutosComponent } from './produtos/produtos.component';

const routes: Routes = [

  {path: '', redirectTo: 'estoque', pathMatch: 'full'},

  {path: 'estoque', component: EstoqueComponent},
  {path: 'categorias', component: CategoriasComponent},
  {path: 'produtos', component: ProdutosComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
