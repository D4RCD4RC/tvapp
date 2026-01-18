import { Component, inject } from '@angular/core';
import { TvCard } from "../../../television/components/tv-card/tv-card";
import { TvService } from '../../../television/services/products.service';
import { rxResource } from '@angular/core/rxjs-interop';

@Component({
  selector: 'home-page',
  imports: [TvCard],
  templateUrl: './home-page.html',
})
export class HomePage {
  TvService = inject(TvService);

  tvResource = rxResource({
    params: () => ({}),
    stream: ({ params }) => this.TvService.getTvShows()
  })
}
