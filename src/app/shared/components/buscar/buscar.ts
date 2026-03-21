import { Component, inject } from '@angular/core';
import { SearchService } from '../../../television/services/search.service';

@Component({
  selector: 'buscar',
  imports: [],
  templateUrl: './buscar.html',
})
export class Buscar {

  searchService = inject(SearchService);
  debounceTimer: any;

  // Actualiza el query cuando el usuario escribe
  update(value: string) {
    this.searchService.query.set(value);
    clearTimeout(this.debounceTimer);
    this.debounceTimer = setTimeout(() => {
      this.searchService.updateQuery(value);
    }, 1000);
  }

  // Limpia el input y resetea búsqueda
  clear() {
    this.searchService.query.set(''); // Limpia el input
  }
}
