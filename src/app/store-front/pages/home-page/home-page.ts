import { Component, inject } from '@angular/core';
import { TvCard } from "../../../television/components/tv-card/tv-card";
import { TvService } from '../../../television/services/products.service';
import { rxResource } from '@angular/core/rxjs-interop';
import { environment } from '../../../../environments/environments';

const api_key = environment.api_key;

@Component({
  selector: 'home-page',
  imports: [TvCard],
  templateUrl: './home-page.html',
})
export class HomePage {
  TvService = inject(TvService);

  tvResource = rxResource({
    params: () => ({}),
    stream: ({ params }) => this.TvService.getTvShows({
      page: 1,
      language: 'es-ES',
      api_key: api_key,
    })
  })
}
