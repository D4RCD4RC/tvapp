import { Component, inject } from '@angular/core';
import { TvCard } from "../../../television/components/tv-card/tv-card";
import { TvService } from '../../../television/services/tv.service';
import { rxResource, toSignal } from '@angular/core/rxjs-interop';
import { environment } from '../../../../environments/environments';
import { Pagination } from "../../../shared/components/pagination/pagination";
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs';

const api_key = environment.api_key;

@Component({
  selector: 'home-page',
  imports: [TvCard, Pagination],
  templateUrl: './home-page.html',
})
export class HomePage {
  tvService = inject(TvService);

  activatedRouter = inject(ActivatedRoute);

  currentPage = toSignal(
    this.activatedRouter.queryParamMap.pipe(
      map((params) => {
        const page = Number(params.get('page'));
        // Si no es número, es menor a 1 o mayor a 500 (límite TMDB), volvemos a 1
        if (isNaN(page) || page < 1 || page > 500) {
          return 1;
        }
        return page;
      })
    ),
    {
      initialValue: 1

    }
  );

  tvResource = rxResource({
    params: () => ({ page: this.currentPage() }),
    stream: ({ params }) => this.tvService.getTvShows({
      page: params.page,
      language: 'es-ES',
      api_key: api_key,

    })
  })
}
