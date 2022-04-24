import { Component, OnInit } from '@angular/core';
import { PokedexService } from 'src/app/services/pokedex.service';

@Component({
  selector: 'poke-list',
  templateUrl: './poke-list.component.html',
  styleUrls: ['./poke-list.component.scss']
})
export class PokeListComponent implements OnInit {
  setAllPokemons:any;
  getAllPokemons:any;

  constructor(private pokedexApi:PokedexService) { }

  ngOnInit(): void {
    this.getPokemons()
  }

  getPokemons() {
    this.pokedexApi.getAllPokemons.subscribe(res => {
      this.setAllPokemons = res.results
      this.getAllPokemons = this.setAllPokemons
    })
  }
  
  getSearch(value:string): void{
    const filter = this.setAllPokemons.filter((r:any) => {
      return !r.name.indexOf(value.toLowerCase())
    })
    this.getAllPokemons= filter
  }

}
