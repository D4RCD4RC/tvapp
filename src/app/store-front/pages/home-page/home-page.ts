import { Component, inject, computed } from '@angular/core';
import { rxResource, toObservable } from '@angular/core/rxjs-interop';
import { combineLatest, debounceTime, distinctUntilChanged, switchMap } from 'rxjs';
import { TvService } from '../../../television/services/tv.service';
import { PaginationService } from '../../../shared/components/pagination/pagination.service';
import { environment } from '../../../../environments/environments';
import { SearchService } from '../../../television/services/search.service';
import { TvCard } from "../../../television/components/tv-card/tv-card";
import { Pagination } from "../../../shared/components/pagination/pagination";

const api_key = environment.api_key;

@Component({
  selector: 'home-page',
  templateUrl: './home-page.html',
  imports: [TvCard, Pagination],
})
export class HomePage {

  tvService = inject(TvService);
  paginationService = inject(PaginationService);
  searchService = inject(SearchService);

  // Observable del query con debounce
  debouncedQuery = toObservable(this.searchService.query).pipe(
    debounceTime(500),
    distinctUntilChanged()
  );

  // Observable de la página actual
  page = toObservable(this.paginationService.currentPage);

  //Reseteo automático de página cuando cambia el query
  debouncedQueryWithReset = this.debouncedQuery.pipe(
    switchMap(q => {
      if (q && q.length >= 2) {
        // Resetear la página a 1 en la URL cuando se inicia una búsqueda
        this.paginationService.router.navigate([], {
          queryParams: { page: 1 },
          queryParamsHandling: 'merge',
        });
      }
      return [q]; // devolver el query para combinarlo con page
    })
  );

  // Recurso principal combinando búsqueda y paginación
  tvResource = rxResource({
    stream: () =>
      combineLatest([this.debouncedQueryWithReset, this.page]).pipe(
        switchMap(([q, page]) => {
          if (q && q.length >= 2) {
            return this.tvService.getTvShowsBySearch({ query: q, page });
          }

          return this.tvService.getTvShows({
            page,
            language: 'es-ES',
            api_key: api_key,
          });
        })
      ),
  });

  // Total de páginas limitado a 500
  totalPages = computed(() => {
    const pages = this.tvResource.value()?.total_pages ?? 1;
    return Math.min(pages, 500);
  });

}