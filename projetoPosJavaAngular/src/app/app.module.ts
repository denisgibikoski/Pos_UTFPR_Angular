import { CursoNODEComponent } from './curso-node/curso-node.component';
import { CursoHTML5Component } from './curso-html5/curso-html5.component';
import { AppRoutingModule } from './app.routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { BannerComponent } from './banner/banner.component';
import { PrincipalComponent } from './principal/principal.component';
import { CardComponent } from './card/card.component';
import { FotoComponent } from './foto/foto.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { FormularioComponent } from './formulario/formulario.component';
import { RodapeComponent } from './rodape/rodape.component';
import { CursoANGULARComponent } from './curso-angular/curso-angular.component';
import { CursoJSComponent } from './curso-js/curso-js.component';
import { CrudService } from './crud/crud.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ListarComponent } from './listar/listar.component';
import { LoginComponent } from './login/login.component';





@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    BannerComponent,
    PrincipalComponent,
    CardComponent,
    FotoComponent,
    CadastroComponent,
    FormularioComponent,
    RodapeComponent,
    CursoHTML5Component,
    CursoANGULARComponent,
    CursoJSComponent,
    CursoNODEComponent,
    ListarComponent,
    LoginComponent


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [CrudService],
  bootstrap: [AppComponent]
})
export class AppModule { }
