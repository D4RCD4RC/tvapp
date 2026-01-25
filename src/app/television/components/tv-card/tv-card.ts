import { Component, computed, input } from '@angular/core';
import { RouterLink } from "@angular/router";
import { TvName } from '../../interfaces/tv.interface';
import { SlicePipe } from '@angular/common';
import { TvImagePipe } from '../../pipes/tv-image.pipe';

@Component({
  selector: 'tv-card',
  imports: [RouterLink, SlicePipe, TvImagePipe],
  templateUrl: './tv-card.html',

})
export class TvCard {
  tv = input.required<TvName>();
}
