import { Component, OnInit, Output, EventEmitter } from '@angular/core';




@Component({
  selector: 'poke-search',
  templateUrl: './poke-search.component.html',
  styleUrls: ['./poke-search.component.scss']
})
export class PokeSearchComponent implements OnInit {
  @Output() searched:EventEmitter<string> = new EventEmitter()

  constructor() { }

  ngOnInit(): void {
  }

  search(event:string) {
    this.searched.emit(event)
  }

}
