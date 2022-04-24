import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { forkJoin } from 'rxjs';
import { PokedexService } from 'src/app/services/pokedex.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  private urlPokemon:string = "https://pokeapi.co/api/v2/pokemon"
  private urlName:string = "https://pokeapi.co/api/v2/pokemon-species"
  public pokemon:any
  public isLoading:boolean = false
  public errorApi:boolean = false

  constructor(
    private activatedRoute: ActivatedRoute,
    private pokeApi: PokedexService
  ) { }

  ngOnInit(): void {
    this.getPokemon
  }

  get getPokemon() {
    const id = this.activatedRoute.snapshot.params['id']
    const pokemon = this.pokeApi.getPokemon(`${this.urlPokemon}/${id}`)
    const name = this.pokeApi.getPokemon(`${this.urlName}/${id}`)

    return forkJoin([pokemon, name]).subscribe(
      res => {
        this.pokemon  = res
        this.isLoading  = true
      },
      error => {
        this.errorApi = true
      }
    )
  }

}
