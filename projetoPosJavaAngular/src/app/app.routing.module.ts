import { ListarComponent } from './listar/listar.component';
import { CursoNODEComponent } from './curso-node/curso-node.component';
import { CursoHTML5Component } from './curso-html5/curso-html5.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { PrincipalComponent } from './principal/principal.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CursoANGULARComponent } from './curso-angular/curso-angular.component';
import { CursoJSComponent } from './curso-js/curso-js.component';
import { LoginComponent } from './login/login.component';




const routes: Routes = [

  { path: 'principal', component: PrincipalComponent },
  { path: 'cadastro', component: CadastroComponent },
  { path: 'cursoHTML5', component: CursoHTML5Component },
  { path: 'cursoANGULAR', component: CursoANGULARComponent },
  { path: 'cursoJS', component: CursoJSComponent },
  { path: 'cursoNODE', component: CursoNODEComponent },
  { path: 'listar', component: ListarComponent },
  { path: 'cadastro/:id', component: CadastroComponent },
  { path: 'login', component: LoginComponent },






  { path: '', redirectTo: 'principal', pathMatch: 'full' }

];

export const RoutingModule = RouterModule.forRoot(routes);
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
export const routedComponents = [];
