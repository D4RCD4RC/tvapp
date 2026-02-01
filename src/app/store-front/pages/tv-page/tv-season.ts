import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TvService } from '../../../television/services/tv.service';
import { rxResource } from '@angular/core/rxjs-interop';
import { TvImagePipe } from "../../../television/pipes/tv-image.pipe";
import { SlicePipe } from '@angular/common';
import { TvDetail } from '../../../television/interfaces/tv-detail.interface';

@Component({
  selector: 'tv-season',
  imports: [TvImagePipe, SlicePipe],
  templateUrl: './tv-season.html',
  styles: `
    :host {
      display: block;
    }
  `,
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
