import { Component, inject } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { Buscar } from '../../../shared/components/buscar/buscar';
import { SearchService } from '../../../television/services/search.service';
import { Historial } from "../../../shared/components/Historial/Historial";

@Component({
  selector: 'front-navbar',
  imports: [RouterLink, RouterLinkActive, Buscar, Historial],
  templateUrl: './front-navbar.html',
})
export class FrontNavbar {
  searchService = inject(SearchService);

  clear() {
    this.searchService.query.set('');
  }
}
