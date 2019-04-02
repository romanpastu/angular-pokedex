import { Component, OnInit } from '@angular/core';
//import { JsonLoadService } from '../json-load.service';
@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css']
})
export class PokemonListComponent implements OnInit {
 
  //pokemons;
  featureSelected = "pokemonlist";
  usersClickCount = 3;


  /*
  constructor(private Json: JsonLoadService) {
    this.pokemons = this.Json.getUrl().subscribe(res => {
      this.pokemons = res;
    })
  }
  */

  ngOnInit() {


  }

  onSelectedFeature(feature: string) {
    this.usersClickCount++;
    if (this.usersClickCount % 2 == 0) {
      this.featureSelected = feature;
    }else{
    this.featureSelected = "";
    }
  }
}
