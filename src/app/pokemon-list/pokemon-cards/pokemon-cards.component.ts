import { Component, OnInit } from '@angular/core';
import { JsonLoadService } from '../../json-load.service';
@Component({
  selector: 'app-pokemon-cards',
  templateUrl: './pokemon-cards.component.html',
  styleUrls: ['./pokemon-cards.component.css']
})
export class PokemonCardsComponent implements OnInit {
  pokemons;
  



  constructor(private Json: JsonLoadService) {
    this.pokemons = this.Json.getUrl().subscribe(res => {
      this.pokemons = res;
    })
  }
  ngOnInit() {
  }

}
