import { Component } from '@angular/core';
import { PokedexService } from './services/pokedex.service';

@Component({
  selector: 'app-root',
  template: `<router-outlet></router-outlet>`,
})
export class AppComponent {
  title = 'pokedex';

  constructor() {
  }

  
}
