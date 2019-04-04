import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule, Router } from '@angular/router';

import { PokemonListComponent } from '../../src/app/pokemon-list/pokemon-list.component';
import {LoginComponent} from '../../src/app/login/login.component'
import { AuthGuard } from './auth.guard';

import {UserListComponent} from './pokemon-list/user-list/user-list.component'


const routes: Routes = [
  {path: 'pokemonlist', component: PokemonListComponent , canActivate: [AuthGuard] },
  {path: 'login', component: LoginComponent},
  { path: '',redirectTo: '/login',pathMatch: 'full'},
  {path: 'userlist', component: UserListComponent , canActivate: [AuthGuard]}
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
