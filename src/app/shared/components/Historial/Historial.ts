import { Component, inject } from '@angular/core';
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
}
