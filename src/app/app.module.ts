import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

import {MatCardModule} from "@angular/material/card";

import {MatToolbarModule} from "@angular/material/toolbar";
import {MatTabsModule} from "@angular/material/tabs";
import {MatDialogModule} from "@angular/material/dialog";
import {PokemonListComponent} from "./views/body/pokemon-list/pokemon-list.component";
import {CardsComponent} from "./views/body/cards/cards.component";
import {FooterComponent} from "./views/footer/footer.component";
import {HeaderComponent} from "./views/header/header.component";
import {ButtonPokemonComponent} from "./views/body/button-pokemon/button-pokemon.component";
import {PokemonService} from "./services/pokemon.service";
import {PipeService} from "./services/pipe.service";
import {MatPaginatorModule} from "@angular/material/paginator";
import {NgxPaginationModule} from "ngx-pagination";
import {MatIcon, MatIconModule} from "@angular/material/icon";

@NgModule({
  declarations: [
    AppComponent,
    PokemonListComponent,
    CardsComponent,
    FooterComponent,
    HeaderComponent,
    ButtonPokemonComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatTabsModule,
    MatCardModule,
    HttpClientModule,
    MatDialogModule,
    MatPaginatorModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    MatIconModule
  ],
  providers: [PokemonService, PipeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
