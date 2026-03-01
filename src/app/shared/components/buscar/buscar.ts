import { Component, inject, signal } from '@angular/core';
import { TvService } from '../../../television/services/tv.service';
import { rxResource, toObservable } from '@angular/core/rxjs-interop';
import { debounceTime, distinctUntilChanged, map, of, switchMap, tap } from 'rxjs';

@Component({
  selector: 'buscar',
  imports: [],
  templateUrl: './buscar.html',
})
export class Buscar {
  private tvService = inject(TvService);
  query = signal('');

  debouncedQuery$ = toObservable(this.query).pipe(
    debounceTime(500),
    distinctUntilChanged()
  );

  tvSearchResource = rxResource({
    stream: () =>
      this.debouncedQuery$.pipe(
        switchMap(q =>
          q.length < 2
            ? of([])
            : this.tvService.getTvShowsBySearch({ query: q }).pipe(
              map(res => res.results),
              tap(res => console.log(res))

            )
        )
      )
  });

}
