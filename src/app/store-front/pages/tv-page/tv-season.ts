import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TvService } from '../../../television/services/tv.service';
import { rxResource } from '@angular/core/rxjs-interop';
import { TvDetail } from '../../../television/interfaces/tv-detail.interface';
import { SeasonCard } from "../../../television/components/season-card/season-card";

@Component({
  selector: 'tv-season',
  imports: [SeasonCard],
  templateUrl: './tv-season.html',

})
export class TvSeason {
  activatedRoute = inject(ActivatedRoute);
  tvService = inject(TvService);

  tvId: string = this.activatedRoute.snapshot.params['id'];

  tvResource = rxResource<TvDetail, { id: string }>({
    params: () => ({ id: this.tvId }),
    stream: ({ params }) => this.tvService.getTvShowByid(params.id),
  })

}
