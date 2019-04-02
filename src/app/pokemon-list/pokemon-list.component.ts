import { Component, OnInit } from '@angular/core';
//import { JsonLoadService } from '../json-load.service';
@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css']
})
export class PokemonListComponent implements OnInit {

  //pokemons;
  featureUserList = "";
  usersClickCount = 3;
  pokedexClickCount = 4;
  featurePokemonCard = "pokedexlist";


  ngOnInit() {


  }

  onSelectedFeature(feature: string) {
    if (feature == "userlist") {
      this.featureUserList = "userlist";
      this.featurePokemonCard = "";
      
    }else if(feature  == "pokedexlist"){
      this.featureUserList = "";
      this.featurePokemonCard = "pokedexlist";
    }
  }
}
