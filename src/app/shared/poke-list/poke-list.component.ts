import { Component, OnInit } from '@angular/core';
import { PokedexService } from 'src/app/services/pokedex.service';

@Component({
  selector: 'poke-list',
  templateUrl: './poke-list.component.html',
  styleUrls: ['./poke-list.component.scss']
})
export class PokeListComponent implements OnInit {

  constructor(private pokedexApi:PokedexService) { }

  ngOnInit(): void {
    this.getPokemons()
  }

  getPokemons() {
    this.pokedexApi.getAllPokemons.subscribe(res =>  console.log(res))
  }
  

}
