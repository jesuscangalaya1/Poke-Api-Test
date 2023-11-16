import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {Poke} from '../model/pokemon.model';
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root',
})
export class PokemonService {

  private apiUrl = environment.apiUrl;

  constructor(private httpClient: HttpClient) {
  }

  // Obtener la lista de Pokémon
  getPokemons(): Observable<any> {
    return this.httpClient.get<any>(this.apiUrl);
  }

  // Cargar detalles de un Pokémon específico
  cargarPokemon(pokemon: any): Observable<any> {
    return this.httpClient.get<any>(pokemon.url);
  }

  // Obtener una lista paginada de Pokémon
  getPoke(offset: number = 0, limit: number = 50): Observable<Poke[]> {
    const url = `${this.apiUrl}?limit=${limit}&offset=${offset}`;
    return this.httpClient.get<Poke[]>(url);
  }

}
