import { Component, inject } from '@angular/core';
import { TvCard } from "../../../television/components/tv-card/tv-card";
import { TvService } from '../../../television/services/tv.service';
import { rxResource } from '@angular/core/rxjs-interop';
import { environment } from '../../../../environments/environments';
import { Pagination } from "../../../shared/components/pagination/pagination";
import { PaginationService } from '../../../shared/components/pagination/pagination.service';




const api_key = environment.api_key;

@Component({
  selector: 'home-page',
  imports: [TvCard, Pagination],
  templateUrl: './home-page.html',
})
export class HomePage {
  tvService = inject(TvService);
  paginationService = inject(PaginationService);

  tvResource = rxResource({
    params: () => ({ page: this.paginationService.currentPage() }),
    stream: ({ params }) => this.tvService.getTvShows({
      page: params.page,
      language: 'es-ES',
      api_key: api_key,
    })
  })
}
