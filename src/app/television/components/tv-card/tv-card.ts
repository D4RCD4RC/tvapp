import { Component } from '@angular/core';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'tv-card',
  imports: [RouterLink],
  templateUrl: './tv-card.html',
  styles: `
    :host {
      display: block;
    }
  `,
})
export class TvCard { }
