import { Component, inject } from '@angular/core';
import { rxResource, toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute } from '@angular/router';
import { filter, map } from 'rxjs';
import { TvService } from '../../../television/services/tv.service';
import { TvCard } from "../../../television/components/tv-card/tv-card";
import { TV_GENRES_MAP } from '../../../helpers/mapaIds';

@Component({
  selector: 'gender-page',
  imports: [TvCard],
  templateUrl: './gender-page.html',
})

export class GenderPage {
  tvService = inject(TvService);
  route = inject(ActivatedRoute);

  genreIds = toSignal(
    this.route.params.pipe(
      map(({ gender }) => TV_GENRES_MAP[gender]),
      filter((ids): ids is number[] => Array.isArray(ids))
    )
  );

  tvResource = rxResource({
    params: () => ({ genreIds: this.genreIds() }),
    stream: ({ params }) =>
      this.tvService.getTvShowsByGenre({
        genreIds: params.genreIds!
      })
  });
}
