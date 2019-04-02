import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';
import { JsonLoadService } from './json-load.service';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { AngularFireModule} from '@angular/fire';
import { environment } from 'src/environments/environment';
import {FormsModule} from  '@angular/forms';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AppRoutingModule } from './app-routing.module';

import { NavbarComponent } from './navbar/navbar.component';
import { UserListComponent } from './pokemon-list/user-list/user-list.component';
import { PokemonCardsComponent } from './pokemon-list/pokemon-cards/pokemon-cards.component';

@NgModule({
  declarations: [
    AppComponent,
    PokemonListComponent,
    LoginComponent,

    NavbarComponent,
    UserListComponent,
    PokemonCardsComponent,
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [JsonLoadService],
  bootstrap: [AppComponent]
})
export class AppModule { }
