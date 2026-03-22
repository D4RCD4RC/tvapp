import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { SearchService } from '../../../television/services/search.service';

@Component({
  selector: 'btn-historial',
  imports: [],
  templateUrl: './Historial.html',
  styles: `
    :host {
      display: block;
    }
  `,
})
export class Historial {
  searchService = inject(SearchService);
  router = inject(Router);

  onHistoryClick(item: string) {
    this.searchService.updateQuery(item);
    if (this.router.url.split('?')[0] !== '/') {
      this.router.navigate(['/']);
    }
  }
}
