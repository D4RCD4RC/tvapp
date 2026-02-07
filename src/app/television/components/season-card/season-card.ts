import { Component, input } from '@angular/core';
import { TvDetail } from '../../interfaces/tv-detail.interface';
import { SlicePipe } from '@angular/common';
import { TvImagePipe } from "../../pipes/tv-image.pipe";


@Component({
  selector: 'season-card',
  imports: [SlicePipe, TvImagePipe],
  templateUrl: './season-card.html',
})
export class SeasonCard {
  tv = input.required<TvDetail>();
}
