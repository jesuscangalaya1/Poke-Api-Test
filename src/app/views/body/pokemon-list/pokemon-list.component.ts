import {Component, OnInit, ViewChild} from '@angular/core';
import {PipeService} from 'src/app/services/pipe.service';
import {PokemonService} from 'src/app/services/pokemon.service';
import {MatPaginator} from "@angular/material/paginator";

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css']
})

export class PokemonListComponent implements OnInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  pokemons: any[] = [];
  pokemonFiltered: any[] = [];
  pageSize = 12;
  pageIndex = 1;
  offset = 100;
  limit = 0;

  constructor(public PokemonService: PokemonService,
              private readonly pipeService: PipeService) {

    this.PokemonService.getPokemons().subscribe((pokemonList: any) => {

      this.pokemons = pokemonList.results;
      this.pokemonFiltered = this.pokemons;
    });
  }

  ngOnInit(): void {
    this.getPokemons();
    this.receiveFilterChanges();
  }

  private getPokemons() {
    this.PokemonService.getPoke(this.offset).subscribe((pokemonList: any) => {
      if (this.pokemons.length == 0) {
        this.pokemons = pokemonList.results;
      } else {
        this.pokemons.push(...pokemonList.results);
      }
    });
    this.pokemonFiltered = this.pokemons.slice(0, this.pageIndex * this.pageSize);

  }

  receiveFilterChanges() {
    this.pipeService.onFilter.subscribe(message => {
      this.filtrarPokemon(message);
    });
  }

  filtrarPokemon(searchValue: string): void {
    if (searchValue === '') {
      this.pokemonFiltered = this.pokemons;
    } else {
      const searchLower = searchValue.toLowerCase().trim();
      this.pokemonFiltered = this.pokemons.filter((pokemon: any) =>
        pokemon.name.toLowerCase().includes(searchLower)
      );

      if (this.pokemonFiltered.length === 0) {
        throw new Error('No se encontraron Pokémon que coincidan con la búsqueda.');
      }
    }
  }

  onPageChange(event: any): void {
    this.pageIndex = event.pageIndex + 1;
  }
}


