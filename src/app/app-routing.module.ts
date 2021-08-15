import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CategoriasComponent } from './categorias/categorias.component';
import { EstoqueComponent } from './estoque/estoque.component';

const routes: Routes = [

  {path: '', redirectTo: 'estoque', pathMatch: 'full'},

  {path: 'estoque', component: EstoqueComponent},
  {path: 'categorias', component: CategoriasComponent} 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
