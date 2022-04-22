import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { map, Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokedexService {

  private apiUrl  = "https://pokeapi.co/api/v2/pokemon?offset=0&limit=100"

  constructor(private http:HttpClient) { }

    get getAllPokemons():Observable<any> {
    return this.http.get<any>(this.apiUrl).pipe(
      tap(res => res),
      tap(res => {
        res.results.map((r:any) => {
          this.getPokemon(r.url).subscribe(
            res => r.status = res

          )
        })
      })
    )
  }

  public getPokemon(url: string){
    return this.http.get<any>(url).pipe(
      map(
        res => res
      )
    )
  }

}

