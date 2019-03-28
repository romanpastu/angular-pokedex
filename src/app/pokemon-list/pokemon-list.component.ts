import { Component, OnInit } from '@angular/core';
import { JsonLoadService } from '../json-load.service';
@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css']
})
export class PokemonListComponent implements OnInit {
  pokemons;



  constructor( private Json : JsonLoadService) {
    this.pokemons = this.Json.getUrl().subscribe( res => {
      this.pokemons = res;
    })
  }

  ngOnInit() {
    

  }

}
