import { Component, computed, input, linkedSignal } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'pagination',
  imports: [RouterLink],
  templateUrl: './pagination.html',
})


export class Pagination {
  // Total de páginas que te envía la API (ej. total_pages)
  totalPages = input<number>(0);
  currentPage = input<number>(1);
  protected Math = Math;

  activePage = linkedSignal(this.currentPage);

  // Límite máximo permitido por TMDB
  private readonly MAX_PAGES = 500;

  getPagesList = computed(() => {
    // Determinamos el techo: el menor entre lo que dice la API y el límite de 500
    const maxAllowed = Math.min(this.totalPages(), this.MAX_PAGES);

    const current = this.activePage();
    const range = 2; // Cuántas páginas mostrar a los lados de la actual

    let start = Math.max(1, current - range);
    let end = Math.min(maxAllowed, current + range);

    // Ajuste para mostrar siempre la misma cantidad de botones si es posible
    if (current <= range) {
      end = Math.min(maxAllowed, 5);
    }
    if (current > maxAllowed - range) {
      start = Math.max(1, maxAllowed - 4);
    }

    const pages = [];
    for (let i = start; i <= end; i++) {
      pages.push(i);
    }
    return pages;
  });
}