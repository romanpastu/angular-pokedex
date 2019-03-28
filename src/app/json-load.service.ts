import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class JsonLoadService {
 
  constructor(private http: HttpClient) { }

  getUrl(): any {
    const url = 'https://raw.githubusercontent.com/Biuni/PokemonGO-Pokedex/master/pokedex.json';
    return this.http.get(url);
  }
}
