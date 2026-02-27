import { Component, inject } from '@angular/core';
import { rxResource, toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute } from '@angular/router';
import { filter, map } from 'rxjs';
import { TvService } from '../../../television/services/tv.service';
import { TvCard } from "../../../television/components/tv-card/tv-card";
import { TV_GENRES_MAP } from '../../../helpers/mapaIds';
import { Pagination } from "../../../shared/components/pagination/pagination";
import { PaginationService } from '../../../shared/components/pagination/pagination.service';
import { Buscar } from "../../../shared/components/buscar/buscar";

@Component({
  selector: 'gender-page',
  imports: [TvCard, Pagination, Buscar],
  templateUrl: './gender-page.html',
})

export class GenderPage {
  tvService = inject(TvService);
  route = inject(ActivatedRoute);
  paginationService = inject(PaginationService);

  genreIds = toSignal(
    this.route.params.pipe(
      map(({ gender }) => TV_GENRES_MAP[gender]),
      filter((ids): ids is number[] => Array.isArray(ids))
    )
  );

  tvResource = rxResource({
    params: () => ({ genreIds: this.genreIds(), page: this.paginationService.currentPage() }),
    stream: ({ params }) =>
      this.tvService.getTvShowsByGenre({
        genreIds: params.genreIds!,
        page: params.page!
      })
  });
}
