import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { SearchService } from '../../../television/services/search.service';

@Component({
  selector: 'buscar',
  imports: [],
  templateUrl: './buscar.html',
})
export class Buscar {

  searchService = inject(SearchService);
  router = inject(Router);
  debounceTimer: any;

  // Actualiza el query cuando el usuario escribe
  update(value: string) {
    this.searchService.query.set(value);

    // Navegar a inicio si estamos buscando desde otra ruta
    if (value.trim().length > 0 && this.router.url.split('?')[0] !== '/') {
      this.router.navigate(['/']);
    }

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
