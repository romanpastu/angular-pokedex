import { Component, OnInit } from '@angular/core';
import pokedexJson from '../../pokedex.json';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css']
})
export class PokemonListComponent implements OnInit {
  pokemons = pokedexJson;
  constructor() {
  //   console.log(pokedexJson);
  //  console.log(pokedexJson.pokemon[0].id);
  //  console.log(pokedexJson.pokemon[0].num);
  //  console.log(pokedexJson.pokemon[0].name);
    
   }

  ngOnInit() {
    

  }

}
