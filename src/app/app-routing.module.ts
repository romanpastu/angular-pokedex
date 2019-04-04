import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule, Router } from '@angular/router';

import { PokemonListComponent } from '../../src/app/pokemon-list/pokemon-list.component';
import {LoginComponent} from '../../src/app/login/login.component'
import { AuthGuard } from './auth.guard';



const routes: Routes = [
  // { path: '', redirectTo: '/home', pathMatch: 'full' },
  {path: 'pokemonlist', component: PokemonListComponent , canActivate: [AuthGuard] },
  {path: 'login', component: LoginComponent},
  { path: '',redirectTo: '/login',pathMatch: 'full'},
  {path: '**', redirectTo: '/login'}
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
