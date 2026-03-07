import { Component, inject } from '@angular/core';
import { SearchService } from '../../../television/services/search.service';

@Component({
  selector: 'buscar',
  imports: [],
  templateUrl: './buscar.html',
})
export class Buscar {

  searchService = inject(SearchService);

  // Actualiza el query cuando el usuario escribe
  update(value: string) {
    this.searchService.query.set(value);
  }


  // Limpia el input y resetea búsqueda
  clear() {
    this.searchService.query.set(''); // Limpia el input
  }
}
