import { Component, inject } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { Buscar } from '../../../shared/components/buscar/buscar';
import { SearchService } from '../../../television/services/search.service';

@Component({
  selector: 'front-navbar',
  imports: [RouterLink, RouterLinkActive, Buscar],
  templateUrl: './front-navbar.html',
})
export class FrontNavbar {
  searchService = inject(SearchService);

  clear() {
    this.searchService.query.set('');
  }
}
